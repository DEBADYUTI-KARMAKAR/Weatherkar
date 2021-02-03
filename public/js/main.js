const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.middle_layer')

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === "" ){
        city_name.innerText = `Please write the name before search`;
        data_hide.classList.add('data_hide'); 
    }else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=effa8d2e99e893da2ef6a55c0ec26d01`;
        const response = await fetch(url);
        const data = await response.json();
       const arrData =[data];
        
       city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
       temp_real_val.innerText = arrData[0].main.temp;
        //temp_status.innerText=arrData[0].weather[0].main;

        // condition to check sunny or cloudy
        const tempMood =arrData[0].weather[0].main;
        if(tempMood == "Clear"){
            temp_status.innerHTML =
            "<i class='fas fa-nun' style='color: #eccc68;'></i>";

        }

        else if(tempMood == "Clouds"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";


        }
        else if(tempMood == "Rain"){
            temp_status.innerHTML =
            "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
           

        }
        else{
            temp_status.innerHTML =
            "<i class='fas fa-sun' style='color: #eccc68;'></i>";
        }
        data_hide.classList.remove('data_hide');
        
        
        }catch{
            city_name.innerText = `Please Enter the city name properly`;
            data_hide.classList.add('data_hide');
        }
    }

}

submitBtn.addEventListener('click', getInfo);