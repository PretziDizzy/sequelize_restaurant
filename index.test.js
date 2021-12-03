

const {Menus, Restaurant, Sequelize} = require('./index')

describe('Menus Database', () => {

    beforeAll(async() => {
        //reset database
        await Sequelize.sync({force:true})
      
        const arrayOfRestaurant = [
            {name: 'OliveGarden1', location: 'Plano', capacity: 25},
            {name: 'OliveGarden2', location: 'Allen', capacity: 30},
            {name: 'OliveGarden3', location: 'Frisco', capacity: 35}
        ]
        const arrayOfMenus =[
            {name: 'breakfastMenu', type:'breakfast', isSpanish: true},
            {name: 'lunchMenu', type:'entrees', isSpanish: true},
            {name: 'dinnerMenu', type:'drinks', isSpanish: true},  
        ]

        await Restaurant.bulkCreate(arrayOfRestaurants)
        await Menus.bulkCreate(arrayOfMenus)
    })

test('menus have a restaurant', async() => { 
    
    const testMenu = await Menus.findOne({where: {name: 'breakfastMenu'}});
    expect(testMenu.isSpanish).toBe('all')
})

})

