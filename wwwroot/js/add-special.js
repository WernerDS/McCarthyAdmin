'use strict';

// Disable Dropzone auto discover
if($('#dropzone-upload')[0]) {
    Dropzone.autoDiscover = false;
}

$(document).ready(function () {
	
	// Drag n Drop file upload (DropzoneJs)
    if($('#dropzone-upload')[0]) {
        $('#dropzone-upload').dropzone({
            url: "/file/post",
            addRemoveLinks: true
        });
    }
    
    // Date start
    if($('.date-picker-start')[0]) {
        $('.date-picker-start').flatpickr({
            enableTime: false,
            dateFormat: "d.m.Y",
            nextArrow: '<i class="fas fa-arrow-right" />',
            prevArrow: '<i class="fas fa-arrow-left" />'
        });
    }
    
    // Date end
    if($('.date-picker-end')[0]) {
        $('.date-picker-end').flatpickr({
            enableTime: false,
            dateFormat: "d.m.Y",
            nextArrow: '<i class="fas fa-arrow-right" />',
            prevArrow: '<i class="fas fa-arrow-left" />'
        });
    }
    
});

