$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/movimentacao.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro",
  "description": "Cadastro de solicitação de seguro de veículos\nQuero fazer o meu cadastro no Tricentis\nPara que eu possa fazer uma cotação de seguros para o meu veículo",
  "id": "cadastro",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Vehicle Data",
  "description": "",
  "id": "cadastro;vehicle-data",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 12,
  "name": "que acesso a página dos dados do veículo",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "submeto o seguinte formulário de cadastro",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "sou redirecionado para o enter Insurant Data",
  "keyword": "Então "
});
formatter.match({
  "location": "movimentacaoSteps.que_acesso_a_página_dos_dados_do_veículo()"
});
formatter.result({
  "duration": 569294280,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:738)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:330)\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\n\tat br.ce.wcaquino.steps.movimentacaoSteps.que_acesso_a_página_dos_dados_do_veículo(movimentacaoSteps.java:15)\n\tat ✽.Dado que acesso a página dos dados do veículo(src/test/resources/features/movimentacao.feature:12)\n",
  "status": "failed"
});
formatter.match({
  "location": "movimentacaoSteps.submeto_o_seguinte_formulário_de_cadastro()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "movimentacaoSteps.sou_redirecionado_para_o_enter_insurant_data()"
});
formatter.result({
  "status": "skipped"
});
});