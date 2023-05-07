const puppeteer = require('puppeteer');

const consulta = async(request,response)=>{
    try{
        const {cpf} = request.query;
        const {dtNascimento} = request.query;
        const {mae} = request.query;
        const browser = await puppeteer.launch({headless: 'new'});
        const page = await browser.newPage();
        await page.goto('https://www.tse.jus.br/servicos-eleitorais/titulo-e-local-de-votacao/consulta-por-nome');
        
        await page.evaluate((cpf,dtNascimento,mae) => {
            document.getElementById('LV_NomeTituloCPF').value = cpf;
            document.getElementById('LV_DataNascimento').value = dtNascimento;
            document.getElementById('LV_NomeMae').value = mae;
            document.getElementById('consultar-local-votacao-form-submit').click();
        },cpf,dtNascimento,mae)
        var obter = null;
        var seg =10;
        var cont=0;
        function time(){
            setTimeout(async ()=>{
                obter = await page.evaluate(() => {
                    const info = document.getElementById("return-form-local-votacao-cloud").innerText.split('\n\n')
                    return{
                        municipio: info[info.length-2]
                    }
                })
                cont++
                if(cont<seg){
                    time()
                }else{
                    if(obter.municipio){
                        return response.status(200).json(obter.municipio);
                    }
                    return response.status(400).json("Dados incorretos");
                }
            },1000)
        }
        await time()
    }catch(e){
        console.log("Erro: "+e)
        return response.status(500).json(e);
    }
}

module.exports = {
    consulta
}