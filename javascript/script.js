let slider = document.querySelectorAll('.slider-item');
let sliderArrowLeft = document.querySelector('.slider-arrow-left');
let sliderArrowRight = document.querySelector('.slider-arrow-right');
let i = 0;
let buttonPagination = document.querySelectorAll('.slider-pagination-button');



sliderArrowLeft.onclick = function() {
    i--;
    if (i < 0) {
        i = 2
    };

    if (i == 0) {
        slider[0].className = 'slider-item slider-item-active';
        slider[1].className = 'slider-item slider-item-hidden';
        slider[2].className = 'slider-item slider-item-hidden';
        buttonPagination[1].className = 'slider-pagination-button';
        buttonPagination[2].className = 'slider-pagination-button';
        buttonPagination[0].className ='slider-pagination-button slider-pagination-button-current';
    }

    if (i == 1) {
        slider[0].className = 'slider-item slider-item-hidden';
        slider[1].className = 'slider-item slider-item-active';
        slider[2].className = 'slider-item slider-item-hidden';
        buttonPagination[0].className = 'slider-pagination-button';
        buttonPagination[2].className = 'slider-pagination-button';
        buttonPagination[1].className ='slider-pagination-button slider-pagination-button-current';
    }


    if (i == 2) {
        slider[0].className = 'slider-item slider-item-hidden';
        slider[1].className = 'slider-item slider-item-hidden';
        slider[2].className = 'slider-item slider-item-active';
        buttonPagination[0].className = 'slider-pagination-button';
        buttonPagination[1].className = 'slider-pagination-button';
        buttonPagination[2].className ='slider-pagination-button slider-pagination-button-current';
    }

};

sliderArrowRight.onclick = function() {
    i++;
    if (i > 2) {
        i = 0
    };

    if (i == 0) {
        slider[0].className = 'slider-item slider-item-active';
        slider[1].className = 'slider-item slider-item-hidden';
        slider[2].className = 'slider-item slider-item-hidden';
        buttonPagination[1].className = 'slider-pagination-button';
        buttonPagination[2].className = 'slider-pagination-button';
        buttonPagination[0].className ='slider-pagination-button slider-pagination-button-current';
    }

    if (i == 1) {
        slider[0].className = 'slider-item slider-item-hidden';
        slider[1].className = 'slider-item slider-item-active';
        slider[2].className = 'slider-item slider-item-hidden';
        buttonPagination[0].className = 'slider-pagination-button';
        buttonPagination[2].className = 'slider-pagination-button';
        buttonPagination[1].className ='slider-pagination-button slider-pagination-button-current';
    }


    if (i == 2) {
        slider[0].className = 'slider-item slider-item-hidden';
        slider[1].className = 'slider-item slider-item-hidden';
        slider[2].className = 'slider-item slider-item-active';
        buttonPagination[0].className = 'slider-pagination-button';
        buttonPagination[1].className = 'slider-pagination-button';
        buttonPagination[2].className ='slider-pagination-button slider-pagination-button-current';
    }
 };


 buttonPagination[0].onclick = function() {
    slider[0].className = 'slider-item slider-item-active';
    slider[1].className = 'slider-item slider-item-hidden';
    slider[2].className = 'slider-item slider-item-hidden';
    buttonPagination[1].className = 'slider-pagination-button';
    buttonPagination[2].className = 'slider-pagination-button';
    buttonPagination[0].className ='slider-pagination-button slider-pagination-button-current';
 };
 buttonPagination[1].onclick = function() {
    slider[0].className = 'slider-item slider-item-hidden';
    slider[1].className = 'slider-item slider-item-active';
    slider[2].className = 'slider-item slider-item-hidden';
    buttonPagination[0].className = 'slider-pagination-button';
    buttonPagination[2].className = 'slider-pagination-button';
    buttonPagination[1].className ='slider-pagination-button slider-pagination-button-current';
 };
 buttonPagination[2].onclick = function() {
    slider[0].className = 'slider-item slider-item-hidden';
    slider[1].className = 'slider-item slider-item-hidden';
    slider[2].className = 'slider-item slider-item-active';
    buttonPagination[0].className = 'slider-pagination-button';
    buttonPagination[1].className = 'slider-pagination-button';
    buttonPagination[2].className ='slider-pagination-button slider-pagination-button-current';
 };



let modalDeliveryButton = document.querySelector('.advantage-modal');
let popup = document.querySelector('.modal-delivery');
let modalDeliveryClose = popup.querySelector('.modal-close-button');
let form = popup.querySelector('form');

modalDeliveryButton.addEventListener('click', function(modal) {
    modal.preventDefault(),
    popup.classList.add('modal-show')
});

modalDeliveryClose.addEventListener('click', function(modal){
    modal.preventDefault(),
    popup.classList.remove('modal-show')
})


let deliveryButton = document.querySelector('.delivery-button');
let guaranteeButton = document.querySelector('.guarantee-button');
let creditButton = document.querySelector('.credit-button');
let deliveryInfo = document.querySelector('.service-item-delivery');
let guaranteeInfo = document.querySelector('.service-item-guarantee');
let creditInfo = document.querySelector('.service-item-credit');

deliveryButton.onclick = function() {
    guaranteeButton.className = 'service-btn service-hidden-btn';
    creditButton.className = 'service-btn service-hidden-btn';
    deliveryButton.className = 'service-btn service-active-btn';
    guaranteeInfo.className = 'service-item service-item-hidden';
    deliveryInfo.className = 'service-item-active';
    creditInfo.className = 'service-item service-item-hidden';
};

guaranteeButton.onclick = function() {
    deliveryButton.className = 'service-btn service-hidden-btn';
    creditButton.className = 'service-btn service-hidden-btn';
    guaranteeButton.className ='service-btn service-active-btn';
    guaranteeInfo.className = 'service-item-active';
    deliveryInfo.className = 'service-item service-item-hidden';
    creditInfo.className = 'service-item service-item-hidden';
};

creditButton.onclick = function() {
    deliveryButton.className = 'service-btn service-hidden-btn';
    guaranteeButton.className = 'service-btn service-hidden-btn';
    creditButton.className = 'service-btn service-active-btn';
    creditInfo.className = 'service-item service-item-active';
    deliveryInfo.className = 'service-item-hidden';
    guaranteeInfo.className = 'service-item service-item-hidden';
}

let popoverButton = document.querySelector('.basket');
let popover = document.querySelector('.popover')

popoverButton.onclick = function() {
    popover.classList.toggle('popover-active');
    popover.classList.toggle('popover-hidden');
}
