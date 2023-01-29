import inquirer from 'inquirer'
import chalk from 'chalk'



let array = ["align-items", "background-color", "border-radius"] //Define uma variável global para ser utilizada por todas as funções.//

listaCSS()
//Define uma função que vai apresentar o menu inicial com as opções disponíveis para rodar na aplicação.//
function listaCSS() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'O que você deseja fazer?',
          choices: [
            'Exibir lista CSS',
            'Adicionar itens CSS',
            'Remover itens CSS',
            'Sair',
          ],
        },
      ])
      .then((answer) => {
        let action = answer['action']
  
        if (action === 'Exibir lista CSS') {
            showList()
        } else if (action === 'Adicionar itens CSS') {
            insertItens()
        } else if (action === 'Remover itens CSS') {
            removeItens()
        } else if (action === 'Sair') {
            console.log('Sair')
            sair()
           
        }
      })
  }

  //Define uma função para o usuário decidir se deseja voltar ao menu inicial ou sair da aplicação.//
  function back(){
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'back',
          message: 'Deseja voltar ao Menu Inicial?',
          choices: [
            'Sim',
            'Não',
          ],
        },
      ])
      .then((answer) => {
        let back = answer['back']
  
        if (back === 'Sim') {
            listaCSS()
        } else if (back === 'Não') {
            console.log('Sair')
            sair()   
        }
      })
  }

  //Define uma função para exibir a lista de propriedades CSS.//
  function showList(){
    console.log("lista CSS:", array.sort())
    back()

  }

  //Define uma função para inserir itens na lista de propriedades CSS.//
  function insertItens() {
    inquirer
      .prompt([
        {
          name: 'insert',
          message: 'Digite uma propriedade CSS:',
        },
      ])
      .then((answer) => {
        let propriedadeCSS = answer['insert']
  
        if (!array.includes(propriedadeCSS)) {
          array.push(propriedadeCSS)
          console.log(chalk.green('Propriedade CSS inserida com sucesso!!!'))
          console.log("lista CSS:", array.sort())
          return back()
        }
        else{
          console.log(chalk.bgRed.black('Esta propriedade já foi adicionada. Escolha outra!'))
          insertItens()
        }
      })
  }

  //Define uma função para remover itens da lista de propriedades CSS.//
  function removeItens(){
    inquirer
      .prompt([
        {
          name: 'remove',
          message: 'Digite uma propriedade CSS a ser removida:',
        },
      ])
      .then((answer) => {
        let removeCSS = answer['remove']
      
        if (array.includes(removeCSS)) {
          let findFor = removeCSS
          let index = array.indexOf(findFor);
          while(index >= 0){
            array.splice(index, 1);
            index = array.indexOf(findFor);}

          console.log(chalk.bgGreen.black('Propriedade CSS removida com sucesso!!!'))
          console.log("lista CSS:", array.sort())
          return back()
        }
        else {
          console.log(chalk.bgRed.black('Esta propriedade já foi removida. Escolha outra!'))
          console.log("lista CSS:", array.sort())
          return back()
        }
      })
   }

  //Define uma função para encerrar a aplicação exibindo a lista de propriedades CSS e uma mensagem de encerramento.//  
  function sair(){
    console.log("lista CSS:", array.sort())
    console.log(chalk.bgYellow.black('FIM !!!'))
    process.exit()

  }

 