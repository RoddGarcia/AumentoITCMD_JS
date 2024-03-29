# Cálculo do ITCMD (Imposto sobre Transmissão "Causa Mortis" e Doação) - Projeto de Lei n° 7/24

Este é um script JavaScript para calcular o aumento do ITCMD com base em uma tabela de faixas de valores em UFESP (Unidade Fiscal do Estado de São Paulo), conforme especificado no Projeto de Lei n° 7/24 do Estado de São Paulo.

## Tabela de Faixas e Alíquotas

A tabela a seguir mostra as faixas de valores em UFESP e suas respectivas alíquotas de ITCMD:

| Faixa | Valor em UFESP            | Alíquota |
| ----- | ------------------------- | -------- |
| 1     | Até R$ 10.000             | 2%       |
| 2     | De R$ 10.000 a R$ 85.000  | 4%       |
| 3     | De R$ 85.000 a R$ 280.000 | 6%       |
| 4     | Acima de R$ 280.000       | 8%       |

## Funcionamento do Código

Este código JavaScript cria uma tabela HTML dinâmica com campos para inserção de valores pelo usuário. Quando o usuário insere um valor na célula designada, o código calcula o aumento do ITCMD com base nas faixas de valores em UFESP e exibe os resultados na tabela.

### Recursos do Código

- Aceita entrada de valores em formato numérico, permitindo a inclusão de vírgulas e pontos como separadores decimais.
- Formata os valores de entrada e os resultados com a formatação monetária brasileira, exibindo os valores em reais (R$) com duas casas decimais e pontos como separadores de milhares e vírgulas como separadores decimais.
- Caso o usuário insira um valor nulo ou vazio, os resultados são exibidos como "R$ 0,00" em todas as células.
- O código está devidamente comentado para facilitar a compreensão de cada parte do script.

## Contribuindo

Sinta-se à vontade para contribuir com este projeto! Se você tiver sugestões de melhorias, correções de bugs ou novos recursos, não hesite em enviar uma solicitação de pull request.

Espero que este código seja útil para calcular o aumento do ITCMD com base nas faixas de valores estabelecidas no Projeto de Lei n° 7/24 do Estado de São Paulo. Se tiver alguma dúvida ou sugestão, não hesite em entrar em contato.

**Autor:** Rodrigo Garcia de Carvalho

**Data:** 17/02/2024
