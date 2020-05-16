let navigationLinks = [
    {name: 'Home' , url:'file:///C:/1JavaScript/array_menu/index.html' },
    {name: 'About', url:'file:///C:/1JavaScript/array_menu/About.html'},
    {name: 'Shop',url: 'file:///C:/1JavaScript/array_menu/Shop.html'},
    {name: 'Contact us',url: 'file:///C:/1JavaScript/array_menu/Contact_us.html'}
]

let navigationItems = document.createElement('il');

for (let i = 0; i <  navigationLinks.length; i++) {
    let linkItem = navigationLinks[i];
    navigationItems.innerHTML += 
                        '<li class="nav-item"><a class="nav-link" href="'
                        + linkItem.url +'">' 
                        + linkItem.name 
                        +'</a></li>';
}

navigation.appendChild(navigationItems)

// ------------------------------------------------------


document.getElementById('search_1').addEventListener(
    'click',
    onSearchClick
)
document.getElementById('close_search').addEventListener(
    'click',
    onSearchClick
)

function onSearchClick(event){
    event.preventDefault();
    search_input_box.classList.toggle('open');
}

// ------------------------------------------------------

let newArrivalItems = document.querySelectorAll('.arrival_filter_item ul li');

for (let i=0; i < newArrivalItems.length; i++ ){

    newArrivalItems[i].addEventListener(
        'click',
        arrivalNavigationClick
    )
}

function arrivalNavigationClick(event){
    
    for (let i=0; i < newArrivalItems.length; i++ ){
        newArrivalItems[i].classList.remove('active')
    }
    event.target.classList.add('active');
    

    let items = document.querySelectorAll('.new_arrival_iner .single_arrivel_item')
    for (let i = 0; i < items.length; i++ ){
        items[i].classList.add('hidden')
    }

    let dataset = event.target.dataset;

    // (something) ?  true : false
    let itemsToDisplay = (dataset.filter) ? '' : dataset.toggle;

    
    let itemsDisplay = document.querySelectorAll('.new_arrival_iner .single_arrivel_item' + itemsToDisplay)
    for (let i = 0; i < itemsDisplay.length; i++ ){
        items[i].classList.remove('hidden')
    }
}
