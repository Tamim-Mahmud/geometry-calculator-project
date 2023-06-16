let count = 0;
const allCalculateBtn = document.querySelectorAll('.calculate-btn');
console.log("tmaim");
for (const calculateBtn of allCalculateBtn) {
    calculateBtn.addEventListener('click', function (e) {
        const value1 = calculateBtn.parentNode.childNodes[7].childNodes[1].childNodes[1].value;
        const value2 = calculateBtn.parentNode.childNodes[7].childNodes[3].childNodes[1].value;
        const shapeType = calculateBtn.parentNode.childNodes[3].innerText;

        const result = calculateArea(value1, value2, shapeType);
        console.log(result);
        count++;
        if (value1 > 0 && value2 > 0) {
            calculateBtn.parentNode.childNodes[7].childNodes[1].childNodes[1].value = '';
            calculateBtn.parentNode.childNodes[7].childNodes[3].childNodes[1].value = '';
            const newElement = document.createElement('span');

            newElement.innerHTML = `
        <div class="flex justify-between mt-5 items-center">
                        <p>${count}.</p>
                        <p>${shapeType}</p>
                        <p>
                            <span>${result}</span>
                            <span>cm<sup>2</sup></span>
                        </p>
                        <button class="bg-blue-600 px-3 py-2 text-white rounded-md">Convert to m <sup>2</sup></button>
                    </div>
        `
            document.getElementById('result-area').appendChild(newElement);
        }


    });
}