
#[tauri::command]
pub fn get_cities() -> Vec<(String,u16,u16)> {
    let mut rdr = csv::Reader::from_path("texas_pop.csv").unwrap();
    let mut cities_vec: Vec<(String,u16,u16)> = Vec::new();
    for result in rdr.records() {
        //split the record into a vector of strings
        let record = result.unwrap();
        let record_vec: Vec<&str> = record.iter().collect();
        // split string by ; 
        let city_data: Vec<&str> = record_vec[0].split(";").collect();
        // convert strings to u16
        let pop: u16 = city_data[1].parse().unwrap();
        let tile: u16 = city_data[2].parse().unwrap();
        // add to vector
        cities_vec.push((city_data[0].to_string(), pop, tile));
    }
    return cities_vec;
}