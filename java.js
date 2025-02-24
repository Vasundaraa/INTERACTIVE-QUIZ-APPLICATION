let sel=document.querySelectorAll('.Wcurrency')
let Button=document.getElementById('button')
let amount=document.getElementById('amt')

fetch('https://api.frankfurter.dev/v1/currencies')
.then(res=>res.json())
.then(res=>disp(res))
function disp(res)
{
    console.log(Object.entries(res)[0][0])
    let cur= Object.entries(res)
    for ( let i=0 ; i<cur.length ; i++ )
    {
        let op = `<option value="${cur[i][0]}">${cur[i][0]}</option>`
        sel[0].innerHTML += op
        sel[1].innerHTML += op
        //console.log(op)
    }
}

Button.addEventListener('click',()=>{
    let cur1=sel[0].value
    let cur2=sel[1].value
    let amountval=amount.value
    if (cur1===cur2)
    {
        alert("Currencies are same! Enter Different Currencies!!")
    }
    else
    {
        convertcur(cur1,cur2,amountval)
    }
});
function convertcur(from,to,amountvalue)
{
    fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
          .then((resp) => resp.json())
          .then((data) => {
            const convertedAmount = (amountvalue * data.rates[to]).toFixed(2);
            document.getElementById('result').value = convertedAmount;
            console.log(`${amountvalue} ${from} = ${convertedAmount} ${to}`);
          });
        }
      
      //convert("EUR", "USD", 10);


      function convert(from, to, amount) {
        
        }
      
      convert("EUR", "USD", 10);