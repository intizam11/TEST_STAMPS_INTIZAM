const apiKey = '497d70bdfae1b44a15d0030a0fe9ad08';
const lat = '-6.277353';
const long = '106.796805';
const day = 5 * 8;
const units = 'metric';

const baseURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&cnt=${
  day 
}&units=${units}&appid=${apiKey}`;

const getWeather = async () => {
  try {
    // fetch data dari openWheater
    const response = await fetch(baseURL);
    const data = await response.json();
    // 

    // mengambil data hanya setiap hari
    const groupedData = data.list.reduce((acc, obj) => {
      const tanggal = obj.dt_txt.split(' ')[0];
      if (!acc[tanggal]) {
        acc[tanggal] = [];
      }
      acc[tanggal].push(obj);
      return acc;
    }, {});
    const forecastPerDay = Object.values(groupedData).map(dayData => dayData[0]);
    // 
   


    forecastPerDay.map((item) => {
      // mengambil hari
      const cek = new Date(item.dt_txt)
      const options = { weekday: 'long' };
      const day = cek.toLocaleDateString('en-US', options);  
      const firstLetter = day.substring(0, 3).toUpperCase();
      // 

      // mengambil tanggal bulan tahun 
      const tanggal = cek.getDate()
      const bulan = new Intl.DateTimeFormat('en-US', {month : "long"}).format(cek).substring(0,3)
      const tahun = cek.getFullYear()
      // 

      // mengambil suhu setiap hari 
      const suhu = item.main.feels_like        
      // 
      
      // hasil akhir
      console.log(`${firstLetter}, ${tanggal} ${bulan} ${tahun} ${suhu}°C`)
      // 
      
    })
    
  } catch (error) {
    console.log(error);
  }
};

getWeather();
