(function($) {
    "use strict";

//Minimum Setup
    $(function () {
        $('#dt-minimum').datetimepicker();
    });

//Using Locales
    $(function () {
        $('#dt-local').datetimepicker({
            locale: 'ru'
        });
    });
// Time only
    $(function () {
        $('#dt-time').datetimepicker({
            format: 'LT'
        });
    });
//Date only
    $(function () {
        $('#dt-date').datetimepicker({
            format: 'L'
        });
    });
//No Icon
    $(function () {
        $('#dt-noicon').datetimepicker();
    });
//Enabled/Disabled Dates
    $(function () {
        $('#dt-enab-disab-date').datetimepicker({
            defaultDate: "01/1/2021",
            disabledDates: [
                moment("02/10/2021"),
                new Date(2021, 11 - 1, 21),
                "02/10/2021 00:53"
            ]
        });
    });
//view mode
    $(function () {
        $('#dt-view').datetimepicker({
            viewMode: 'years'
        });
    });
//Disabled Days of the Week
    $(function () {
        $('#dt-disab-days').datetimepicker({
            daysOfWeekDisabled: [0, 6]
        });
    });

})(jQuery);