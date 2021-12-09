package br.ce.wcaquino.steps;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class movimentacaoSteps {
	
	//private WebDriver driver;
	
	@Dado("que acesso a página dos dados do veículo")
	public void que_acesso_a_página_dos_dados_do_veículo() {
		WebDriver driver = new ChromeDriver();
		driver.get("http://sampleapp.tricentis.com/101/app.php");
	
	    
	}

	@Quando("submeto o seguinte formulário de cadastro")
	public void submeto_o_seguinte_formulário_de_cadastro() {
	    
	}

	@Então("sou redirecionado para o enter Insurant Data")
	public void sou_redirecionado_para_o_enter_insurant_data() {
	    
	}

	@Dado("que acesso a página de dados do seguro")
	public void que_acesso_a_página_de_dados_do_seguro() {
	    
	}

	@Dado("que acesso a página de cadastro")
	public void que_acesso_a_página_de_cadastro() {
	    
	}

	@Quando("submeto o seguinte formulário de cadastro dois:")
	public void submeto_o_seguinte_formulário_de_cadastro_dois() {
	    
	}

	@Então("sou redirecionado para o Select Price Option")
	public void sou_redirecionado_para_o_select_price_option() {
	    
	}

	@Então("sou redirecionado para o Send Quote")
	public void sou_redirecionado_para_o_send_quote() {
	    
	}

	@Então("sou redirecionado para o Sending e-mail success!")
	public void sou_redirecionado_para_o_sending_e_mail_success() {
	    
	}

}
