# language: pt
@funcionais
Funcionalidade: Cadastro
	Cadastro de solicitação de seguro de veículos
  Quero fazer o meu cadastro no Tricentis
  Para que eu possa fazer uma cotação de seguros para o meu veículo
	

	
	Cenario: Vehicle Data

          Dado que acesso a página dos dados do veículo
          Quando submeto o seguinte formulário de cadastro
          Então sou redirecionado para o enter Insurant Data

  #Cenario: Enter Insurant Data
#
          #Dado que acesso a página de dados do seguro
          #Quando submeto o seguinte formulário de cadastro
          #Então sou redirecionado para o enter Insurant Data
#
  #Cenario: Enter Insurant Data
#
          #Dado que acesso a página de cadastro
          #Quando submeto o seguinte formulário de cadastro:
          #Então sou redirecionado para o Select Price Option
#
  #Cenario: Select Price Option
#
          #Dado que acesso a página de cadastro
          #Quando submeto o seguinte formulário de cadastro dois:
          #Então sou redirecionado para o Send Quote
#
  #Cenario: Send Quote
#
          #Dado que acesso a página de cadastro
          #Quando submeto o seguinte formulário de cadastro:
          #Então sou redirecionado para o Sending e-mail success!