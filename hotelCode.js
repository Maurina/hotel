import { hotel } from './hotel.js'
// let data = hotel;
// console.log(data);

/*--------------------------------Header------------------------------------------------*/
let companyName = document.querySelector('#companyName')
let businessName = document.createElement('h1')
businessName.textContent = `This is ${hotel.businessName}`
debugger
console.log(businessName)
companyName.appendChild(businessName)

/* -------------------------- Room One --------------------------------------*/
const lakeViewContainer = document.querySelector('#LakeView')
  
/*-------------------------------------- Room One Name -------------------------------------------------- */
        let roomName = document.querySelector('.roomName')      
        let nameRoom = document.createElement('h2')
        roomName.append(nameRoom)

        nameRoom.textContent = `Room ${hotel.roomOne.name}`

        console.log(nameRoom)

/*-------------------------------------- Room One Info -------------------------------------------------- */
        let roomInfo = document.querySelector('.roomInfo')
        let information = document.createElement('p')
        information.textContent = `Info ${hotel.roomOne.tagline}`
        roomInfo.appendChild(information)

/*-------------------------------------- Room One Photo -------------------------------------------------- */
        let photography = document.querySelector('.photo')
        let roomPhoto = document.createElement('img')
        roomPhoto.src = hotel.roomOne.photo;
        photography.appendChild(roomPhoto)

/*-------------------------------------- Room One Cost -------------------------------------------------- */
        let price = document.querySelector('.price')
        let cost = document.createElement('h2')
        cost.textContent = `Prices`
        price.appendChild(cost)
        let roomCost = document.createElement('h4')
        roomCost.textContent = `Weekday: ${hotel.roomOne.priceWeek}`
        price.appendChild(roomCost)

        let roomCostEnd = document.createElement('h4')
        roomCostEnd.textContent = `Weekend: ${hotel.roomOne.priceWeekend}`
        price.appendChild(roomCostEnd)

/*-------------------------------------- Room One Amenities -------------------------------------------------- */
        let roomAmenities = document.querySelector('.amenities')
        let amenities = document.createElement('h2')
        amenities.textContent =`Amenities`
        roomAmenities.appendChild(amenities)
    
        let featureOne = document.createElement('h4')
        featureOne.textContent = hotel.roomOne.amenities.one
        roomAmenities.appendChild(featureOne)
    
        let featureTwo = document.createElement('h4')
        featureTwo.textContent = hotel.roomOne.amenities.two
        roomAmenities.appendChild(featureTwo)

        let featureThree = document.createElement('h4')
        featureThree.textContent = hotel.roomOne.amenities.three
        roomAmenities.appendChild(featureThree)

        let featureFour = document.createElement('h4')
        featureFour.textContent = hotel.roomOne.amenities.four
        roomAmenities.appendChild(featureFour)
  