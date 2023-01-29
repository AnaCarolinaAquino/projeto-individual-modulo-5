<h1>Curso Programadores Cariocas</h1>

<h3>Projeto Individual Módulo 5 – Resilia</h3>


<br><br>
<b>CONTEXTO:</b> <i>Algumas soluções podem impactar muitas pessoas, ainda mais na
tecnologia. Que tal criar uma ferramenta no terminal que vai auxiliar
desenvolvedores no dia a dia com CSS?</i><br>


<br>

## Índice
* [Informações Gerais](#general-info)
* [Tecnologias](#technologies)
* [Configuração](#setup)

<br><br>


## Informações Gerais
Usar o Node.js para montar um código que vai receber uma lista de propriedades de CSS (ex: background-color, font-size, text-align) e vai devolver
essa lista ordenada de A-Z. Ordenar o CSS ajuda a encontrar mais rápido a propriedade que precisamos alterar.<br><br>

<b> ⇨ Requisitos:</b>
    <ol>
       <li>A lista deve ser exibida completa em ordem alfabetica.</li>
       <li>A aplicação não deve deixar inserir item que já exista.</li>
       <li>A aplicação rodara no terminal e iniciará com o comando npm start.</li>
    </ol>
<br><br>
	

## Tecnologias

O projeto foi criado com:

* node.js
* npm

<br><br>
	
## Configurações

Para executar este projeto, instale-o localmente usando npm:

```
$ npm init -y
$ npm install inquirer
$ npm install chalk
$ npm start
```

<br><br>


## Testes da Aplicação


<b>Abaixo consta exemplos de testes realizados na aplicação desenvolvida.</b><br><br>

Menu Inicial:<br><br>
![npm-start-menu-inicial](https://user-images.githubusercontent.com/113844035/215296776-1a3ad005-bd06-4f5a-98f9-1e849a8118fd.png)
<br>
Exibir lista de propriedades CSS:<br><br>
![exibir-lista-css](https://user-images.githubusercontent.com/113844035/215296800-12707608-4002-4d2b-9569-b6da20217869.png)
<br>        
Adicionar propriedade CSS na lista:<br><br>
![adicionar-itens-css](https://user-images.githubusercontent.com/113844035/215296819-c96d7a19-cf33-4487-842b-3e724d87ad52.png)
<br>
Adicionar propriedade CSS que já esteja na lista:<br><br>
![adicionar-propriedade-repetida](https://user-images.githubusercontent.com/113844035/215296839-c4115af5-ee3e-4a49-8db8-7d4b28d6a6be.png)
<br>
Remover propriedade CSS da lista:<br><br>
![remover-itens](https://user-images.githubusercontent.com/113844035/215296860-ccd7a94a-6348-4c01-91e3-cb0174f9e8ab.png)
<br>
Sair da aplicação:<br><br>
![sair](https://user-images.githubusercontent.com/113844035/215296871-016fdd85-196d-44bd-a8ba-014ffc14a5a1.png)
<br>
