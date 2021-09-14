const getData = () => {
        // BMI variables
        // const name = document.getElementById("name").value;
        // const std = document.getElementById("std").value;
        // const age = document.getElementById("age").value;
        // const gender = document.getElementById("gender").value;
        const weight = document.getElementById("weight").value;
        const height = document.getElementById("height").value;
        const bmiindex = weight/(height/100)**2 ;
        const reamark = bmiindex>=30 ? "Obese" : bmiindex>=25 ? "Overweight" : bmiindex>=18.5 ? "Healthy Weight" : "Underweight" ;
        if(weight&&height){
        showData(weight,height,bmiindex,reamark);
}

}


const showData = (wgt, ht,bmi,remark) =>{
        const result = `<table class="table-info table">
        <thead>
          <tr>
            <th scope="col">Body Weight (in Kg)</th>
            <th scope="col">Height (in m)</th>
            <th scope="col">BMI</th>
            <th scope="col">Remark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${wgt}</td>
            <td>${ht/100}</td>
            <td>${bmi}</td>
            <td>${remark}</td>
          </tr>`
        document.getElementById("result").innerHTML= result;
}

    