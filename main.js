////Get Slider Items | Array.froms [ES6 Feature]
var sliderItems = Array.from( document.querySelectorAll( `.slider-container img` ) );

////Get number of slides
var slidesCount = sliderItems.length;

/// Set current slide 
var currentSLide = 1;

///Slide number string Element
var slideNumberEle = document.getElementById( `slide-number` );

// Previous and Next Buttons

var nextButton = document.getElementById( `next` );
var prevButton = document.getElementById( `prev` );
/// Handle Clidk on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//Create the main ul elements
var page = document.createElement( `ul` );
page.setAttribute( "id", `pagination-ul` );
// create li in the ul
for ( var i = 1; i<=slidesCount; i++ )
{
    let li = document.createElement( `li` );
    li.setAttribute( `data-index`, i );
    ///set item content
    li.appendChild( document.createTextNode( i ) );
    page.appendChild( li );
}
document.getElementById( `indicators` ).appendChild( page );

///Get the new creted ul
var pageCreatUl = document.getElementById( 'pagination-ul' );
var paginationBullets = Array.from( document.querySelectorAll( `#pagination-ul li` ) );
///loop on all bullets items
for ( var i = 0; i < paginationBullets.length; i++ )
{
    paginationBullets[ i ].onclick = function ()
    {
        currentSLide = parseInt( this.getAttribute( `data-index` ) );
        theChecker();
    }
    
}
theChecker();

////Function next slide()

function nextSlide ()
{
   
    if ( nextButton.classList.contains( `disabled` ) )
    {
        return false;
    }
    else
    {
         currentSLide++;
    theChecker();
    }

}
function prevSlide ()
{
    
    if ( prevButton.classList.contains( `disabled` ) )
    {
        return false;
    }
    else 
    {
        
        
            currentSLide--;
            theChecker();
        
        
    }
    

}
///Create the checker function
function theChecker ()
{
    //remove all active slides
    removeAllActive();

    slideNumberEle.textContent = `slide # ` + ( currentSLide ) + ` of ` + ( slidesCount );
    ///set active class on current slide
    sliderItems[ currentSLide - 1 ].classList.add( `active` );
    //set active class on page item 
    pageCreatUl.children[ currentSLide - 1 ].classList.add( `active` );
    ///check if current slide is the first 
    if ( currentSLide == 1 )
    {
        ///add disable class on previous buttom
        prevButton.classList.add( `disabled` );
    }
    else
    {
                prevButton.classList.remove( `disabled` );

    }
    // check if slide is the last one 
    if ( currentSLide == slidesCount )
    {
        ///add disable class on previous buttom
        nextButton.classList.add( `disabled` );
    }
    else
    {
                nextButton.classList.remove( `disabled` );

    }


}
///remove all active class from images and page 
function removeAllActive ()
{
    ///loop through images
    sliderItems.forEach( function ( img )
    {
        img.classList.remove( `active` );
    } );

    //loop through pagination bullets
    paginationBullets.forEach( function ( bullet )
    {
        bullet.classList.remove( `active` );
    } );
}