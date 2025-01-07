# Telephone Number Validator
![image](https://github.com/user-attachments/assets/6ab64776-d6ad-42f0-9d74-cd60eb9532c5)


## Função validatePhoneNumber(phoneNumber)
Esta função é responsável por validar se o número de telefone informado está em um formato válido. O processo é feito utilizando expressões regulares (regex).
- A expressão regular usada tem a seguinte lógica:
   - ^(1\s?)?: A parte inicial opcional do número, que pode incluir um código de país 1 (para os EUA), com ou sem espaço após o número 1.
   - (\(\d{3}\)|\d{3}): Um código de área de 3 dígitos. Pode ser entre parênteses ou sem parênteses.
   - ([\s\-]?): Um espaço ou hífen opcional entre os grupos de números.
   - \d{3}: Três dígitos.
   - ([\s\-]?): Um espaço ou hífen opcional.
   - \d{4}$: Os últimos quatro dígitos.
- A função retorna true se o número de telefone corresponde à expressão regular (significa que o número é válido). Caso contrário, retorna false (número inválido).
## Função checkPhoneNumber()
Esta função é chamada quando o usuário clica no botão "Verificar" (Check).
- 1° - Pega o valor inserido pelo usuário no campo de texto usando document.getElementById('user-input').value.trim(). O .trim() remove espaços extras no início e no final do texto.
- 2° - Obtém o elemento results-div, onde o resultado da validação será exibido.
- 3° - Se estiver o campo de entrada estiver vazio, um alerta é exibido dizendo "Por favor, forneça um número de telefone". Se o campo não estiver vazio, a função validatePhoneNumber() é chamada para validar o número.
- 4° - Se o número for válido, o resultado é exibido com a mensagem "Número válido: [número]". Se o número for inválido, a mensagem exibida será "Número inválido: [número]".
## Função clearResults()
  Esta função é responsável por limpar o resultado exibido na div de resultados.
  - Quando o usuário clica no botão "Limpar", o conteúdo do div com o id results-div é apagado. Isso é feito com document.getElementById('results-div').innerHTML = '';.
## Event Listeners (Ouvintes de Eventos)
A função addEventListener é usada para associar as funções aos botões na interface do usuário:
- Botão "Verificar" (Check): Quando o botão é clicado, ele chama a função checkPhoneNumber(), que valida o número de telefone.
- Botão "Limpar" (Clear): Quando o botão é clicado, ele chama a função clearResults() para limpar a tela de resultados.
## Fluxo de execução:
- O usuário digita um número no campo de entrada e clica no botão "Verificar".
- O número digitado é validado pela função validatePhoneNumber(). Se for válido, o número é exibido como válido. Caso contrário, ele é mostrado como inválido.
- O botão "Limpar" limpa a área de resultados, removendo qualquer mensagem de erro ou sucesso.
  
