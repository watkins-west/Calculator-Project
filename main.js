function round_number(num) {
    //first, move the decimal two places
    num = num * 100;

    //then, round the number to the nearest integer
    num = Math.round(num);

    //then move the decimal back two places
    num = num / 100;

    // handle trailing zeroes
    num = num.toFixed(2);

    return num;
}

//get all of the calculator inputs 
const inputs = document.querySelectorAll("[name='qty']");

//evaluate all of the inputs
inputs.forEach(function (input) {

    //for each individaul input, listen for a change
    input.addEventListener("change", function (e) {
        const this_input = e.target;
            const qty = parseFloat(e.target.value);
            const this_row = this_input.closest(".row")

            const coin = this_row.querySelector(".coin");
            const coin_span = coin.querySelector("span");
            const coin_price = parseFloat(coin.dataset.price);
            const coin_cost = coin_price * qty;

            coin_span.innerHTML = round_number(coin_cost);
            coin.classList.add("active");

            

    });
});
