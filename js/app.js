/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */
// Global variables
const navBar = document.getElementById('navbar__list');
const allSection = document.querySelectorAll('section');

// generating the navigation bar with iterating a loop over the unordered list link
const navigationBarList = () => {
    let navigationListCreate = '';
    allSection.forEach(section => {
        const IdOfSection = section.id;
        const DataSetOfSection = section.dataset.nav;
        navigationListCreate = navigationListCreate + `<li><a class="menu__link" href="#${IdOfSection}">${DataSetOfSection}</a></li>`;

    });
    navBar.innerHTML = navigationListCreate;
};

navigationBarList();

//function for acknowledgement of the section which is near top of viewport

const IsInViewPort = (section) => {
    const ifInViewPort = Math.floor(section.getBoundingClientRect().top);
    return ifInViewPort;
};


// active class section adding to the section and highlighting related section header navigation link
const ActiveSectionAdd = (condition, section) => {
    if (condition == true) {
        section.classList.add('your-active-class');
        //highlighting related section header navigation link from the active class section
        IdOfSection = section.id.slice(7, 8) - 1;
        navBar.childNodes[IdOfSection].style.cssText = 'color: blue; background-color: orange; font-size: 1.5em; border-radius: 5px';
    };
};

// active class section removing fro the last active section and removing the highlight mark from the last selected section header navigation link
const ActiveSectionRemove = (section) => {
    section.classList.remove('your-active-class');
    //resetting the highlight mark from the last selected section header navigation link
    IdOfSection = section.id.slice(7, 8) - 1;
    navBar.childNodes[IdOfSection].style.cssText = 'background-color:white';
};

// fetching the active section from the top of the viewport 
const ActiveSectionInViewPort = () => {
    allSection.forEach(section => {
        const IsInViewPortElement = IsInViewPort(section);
        inviewport = () => IsInViewPortElement <= 200 && IsInViewPortElement > -200;
        ActiveSectionRemove(section);
        ActiveSectionAdd(inviewport(), section);
    });
};

window.addEventListener('scroll', ActiveSectionInViewPort);

// Scrolling to the desired section by clicking on the navbar list 

const scrollToAnchor = () => {

    const sectionIDLinks = document.querySelectorAll('.navbar__menu a');
    sectionIDLinks.forEach(link => {
        link.addEventListener('click', () => {
            for (let i = 0; i < allSection; i++) {
                allSection[i].addEventListener('click', sectionScroll(link));
            }
        });
    });

};

scrollToAnchor();

//function for smooth scrolling by targeting anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// form submission 
function message() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const fail = document.getElementById('fail');

    if (firstName.value === '' || lastName.value === '' || email.value === '' || msg.value === '') {
        fail.style.display = 'block';
    } else {
        setTimeout(() => {
            firstName.value = '';
            lastName.value = '';
            email.value = '';
            msg.value = '';
        }, 500);

        success.style.display = 'block';
    }


    setTimeout(() => {
        fail.style.display = 'none';
        success.style.display = 'none';
    }, 5000);

}
