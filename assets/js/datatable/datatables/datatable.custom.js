$(document).ready(function() {
    $('product-list').DataTable();
    // Basic table example 
    $('#basic-1').DataTable();
    $('#basic-2').DataTable({
        "paging":   true,
        "ordering": false,
        "info":     false
    });
    $('#basic-3').DataTable({
        "order": [[ 3, "desc" ]]
    });
    $('#basic-4').DataTable({
        columnDefs: [ {
            targets: [ 0 ],
            orderData: [ 0, 1 ]
        }, {
            targets: [ 1 ],
            orderData: [ 1, 0 ]
        }, {
            targets: [ 4 ],
            orderData: [ 4, 0 ]
        } ]
    });
    $('table.show-case').DataTable();
    $('#basic-5').DataTable({
        "columnDefs": [
            {
                "targets": [ 2 ],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [ 3 ],
                "visible": false
            }
        ]
    });
    $('#basic-6').DataTable();
    $('#basic-7').DataTable({
        "dom": '<"wrapper"ltipf>'
    });
    $('#basic-8').DataTable();
    $('#basic-9').DataTable({
        stateSave: true
    });
    $('#basic-10').DataTable({
        "pagingType": "full_numbers"
    });
    $('#basic-11').DataTable({
        "scrollY":        "200px",
        "scrollCollapse": true,
        "paging":         false
    });
    $('#basic-12').DataTable({
        scrollY: '40vh',
        scrollCollapse: true,
        paging:         false
    });
    $('#basic-13').DataTable({
        "scrollY": 200,
        "scrollX": true
    });
    $('#basic-14').DataTable({
        "language": {
            "decimal": ",",
            "thousands": "."
        }
    });
    // Advance data table
    var table = $('#advance-1').DataTable();
    $('#advance-1 tbody').on('click', 'tr', function () {
        var data = table.row( this ).data();
        alert( 'You clicked on '+data[0]+'\'s row' );
    });
    var eventFired = function ( type ) {
        var n = $('#demo_info')[0];
        n.innerHTML += '<div>'+type+' event - '+new Date().getTime()+'</div>';
        n.scrollTop = n.scrollHeight;
    }
    $('#advance-2')
        .on( 'order.dt',  function () { eventFired( 'Order' ); } )
        .on( 'search.dt', function () { eventFired( 'Search' ); } )
        .on( 'page.dt',   function () { eventFired( 'Page' ); } )
        .DataTable();
    $('#advance-3').DataTable({
        "columnDefs": [
            {
                "render": function ( data, type, row ) {
                    return data +' ('+ row[3]+')';
                },
                "targets": 0
            },
            { "visible": false,  "targets": [ 3 ] }
        ]
    });
    $('#advance-4').DataTable({
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
    });
    $('#advance-5').DataTable({
        "dom": '<"top"iflp<"clear">>rt<"bottom"iflp<"clear">>'
    });
    $('#advance-6').DataTable({
        "columnDefs": [ {
            "visible": false,
            "targets": -1
        } ]
    });
    $('#advance-7').DataTable({
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "age" },
            { "data": "start_date" },
            { "data": "salary" }
        ]
    });
    $('#advance-8').DataTable({
        "language": {
            "url": "../assets/json/German.json"
        }
    });
    $('#advance-9').DataTable({
        "searching": false,
        "ordering": false
    });
    $('#advance-10').DataTable({
        "createdRow": function ( row, data, index ) {
            if ( data[5].replace(/[\$,]/g, '') * 1 > 150000 ) {
                $('td', row).eq(5).addClass('text-danger');
            }
        }
    });
    var table = $('#advance-11').DataTable({
        "columnDefs": [
            { "visible": false, "targets": 2 }
        ],
        "order": [[ 2, 'asc' ]],
        "displayLength": 25,
        "drawCallback": function ( settings ) {
            var api = this.api();
            var rows = api.rows( {page:'current'} ).nodes();
            var last=null;
            api.column(2, {page:'current'} ).data().each( function ( group, i ) {
                if ( last !== group ) {
                    $(rows).eq( i ).before(
                        '<tr class="group"><td colspan="5">'+group+'</td></tr>'
                    );
                    last = group;
                }
            });
        }
    });
    $('#advance-11 tbody').on( 'click', 'tr.group', function () {
        var currentOrder = table.order()[0];
        if ( currentOrder[0] === 2 && currentOrder[1] === 'asc' ) {
            table.order( [ 2, 'desc' ] ).draw();
        }
        else {
            table.order( [ 2, 'asc' ] ).draw();
        }
    });
    $('#advance-12').DataTable({
        "footerCallback": function ( row, data, start, end, display ) {
            var api = this.api(), data;
            var intVal = function ( i ) {
                return typeof i === 'string' ?
                i.replace(/[\$,]/g, '')*1 :
                typeof i === 'number' ?
                i : 0;
            };
            total = api
                .column( 4 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            pageTotal = api
                .column( 4, { page: 'current'} )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
            $( api.column( 4 ).footer() ).html(
                '$'+pageTotal +' ( $'+ total +' total)'
            );
        }
    });
    $('#advance-13').DataTable({
        "dom": '<"toolbar">frtip'
    });
    $("div.toolbar").html('<b>Hello This is custom toolbar</b>');
    $('#advance-14').DataTable({
        "aoColumns": [
            null,
            null,
            { "orderSequence": [ "asc" ] },
            { "orderSequence": [ "desc", "asc", "asc" ] },
            { "orderSequence": [ "desc" ] },
            null
        ]
    });
    $('#example-style-1').DataTable();
    $('#example-style-2').DataTable();
    $('#example-style-3').DataTable();
    $('#example-style-4').DataTable();
    $('#example-style-5').DataTable();
    $('#example-style-6').DataTable();
    $('#example-style-7').DataTable();
    $('#example-style-8').DataTable();
    // Data sources tables
    $('#data-source-1').DataTable();
    $('#data-source-2').DataTable({
        
    });
    var dataSet = [
    ];
    $('#data-source-3').DataTable({
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Position" },
            { title: "Office" },
            { title: "Extn." },
            { title: "Start date" },
            { title: "Salary" }
        ]
    });
    $('#data-source-4').DataTable({
        "processing": true,
        "serverSide": true        
    } );



    // API Data Tables
    var t = $('#API-1').DataTable();
    var counter = 10;
    $('#addRow').on( 'click', function () {
        t.row.add( [
            counter +'1',
            counter +'.2',
            counter +'.3',
            counter +'.4',
            counter +'.5'
        ]).draw(false);
        counter++;
    });
    // Automatically add a first row of data
    $('#addRow').click();
    $('#addRow').click();
    $('#addRow').click();
    // Setup - add a text input to each footer cell
    $('#API-2 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );
    var table = $('#API-2').DataTable();
    table.columns().every( function () {
        var that = this;
        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        });
    });
    $('#API-3').DataTable({
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                    var val = $.fn.dataTable.util.escapeRegex(
                        $(this).val()
                    );
                    column
                        .search( val ? '^'+val+'$' : '', true, false )
                        .draw();
                    });
                    column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                });
            });
        }
    });
    var table = $('#API-4').DataTable();
        $('#API-4 tbody')
        .on( 'mouseenter', 'td', function () {
            var colIdx = table.cell(this).index().column;
            $( table.cells().nodes() ).removeClass( 'highlight' );
            $( table.column( colIdx ).nodes() ).addClass( 'highlight' );
        });
    function format ( d ) {
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
            '<tr>'+
            '<td>Full name:</td>'+
            '<td>'+d.name+'</td>'+
            '</tr>'+
            '<tr>'+
            '<td>Extension number:</td>'+
            '<td>'+d.extn+'</td>'+
            '</tr>'+
            '<tr>'+
            '<td>Extra info:</td>'+
            '<td>And any further details here (images etc)...</td>'+
            '</tr>'+
            '</table>';
    }
    //chield row multiple data table start here
    var ct = $('#API-chield-row').DataTable({        
        "columns": [{
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "defaultContent": ''
        }, {
            "data": "name"
        }, {
            "data": "position"
        }, {
            "data": "office"
        }, {
            "data": "salary"
        }],
            "order": [
                [1, 'asc']
            ]
    });
    $('#API-chield-row tbody').on('click', 'td.details-control', function() {
        var tr = $(this).closest('tr');
        var row = ct.row(tr);
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
        } else {
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });
    //chield row multiple data table end here
    //row select multiple data table start here
    var srow = $('#row-select-multiple').DataTable();
    $('#row-select-multiple tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected');
    });
    $('#multiple-row-select-btn').on('click', function() {
        alert(srow.rows('.selected').data().length + ' row(s) selected');
    });
    //row select multiple data table end here
    //single row delete data table start here        
    var deleterow = $('#row-select-delete').DataTable();
    $('#row-select-delete tbody').on('click', 'tr', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            deleterow.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
    $('#single-row-delete-btn').on('click', function() {
        deleterow.row('.selected').remove().draw(!1);
    });
    //single row delete data table end here        
    //form input submit start here
    var table = $('#form-input-datatable').DataTable();
    $('#form-input-datatable-submit').on('click', function() {
        var data = table.$('input, select').serialize();
        alert("The following data would have been submitted to the server: \n\n" + data.substr(0, 120) + '...');
        return false;
    });
    //form input submit end here
    //show hide column start here
    var sh = $('#show-hide-datatable').DataTable({
        "scrollY": "200px",
        "paging": false
    });
    //show hide column end here
    //seach API regular expression start
    function filterGlobal() {
        $('#search-api-datatable').DataTable().search($('#g-filter').val(), $('#global_regex').prop('checked'), $('#global_smart').prop('checked')).draw();
    }
    function filterColumn(i) {
        $('#search-api-datatable').DataTable().column(i).search($('#col' + i + '_filter').val(), $('#col' + i + '_regex').prop('checked'), $('#col' + i + '_smart').prop('checked')).draw();
    }
    $('#search-api-datatable').DataTable();
    $('input.g-filter').on('keyup click', function() {
        filterGlobal();
    });
    $('input.column_filter').on('keyup click', function() {
        filterColumn($(this).parents('tr').attr('data-column'));
    });
    //seach API regular expression start
    //Ajax Data Source (Arrays) start 
    $('#ajax-data-array').DataTable({       
    });
    //Ajax Data Source (Arrays) start 
    //Ajax Data Source (object) start             
    $('#ajax-data-object').DataTable({        
        "columns": [{
            "data": "name"
        }, {
            "data": "position"
        }, {
            "data": "office"
        }, {
            "data": "extn"
        }, {
            "data": "start_date"
        }, {
            "data": "salary"
        }]
    });
    //Ajax Data Source (object) end 
    //Ajax nested object data start 
    $('#ajax-data-nested-object').DataTable({
        "processing": true,       
        "columns": [{
            "data": "name"
            }, {
                "data": "hr.position"
            }, {
                "data": "contact.0"
            }, {
                "data": "contact.1"
            }, {
                "data": "hr.start_date"
            }, {
                "data": "hr.salary"
        }]
    });
    //Ajax nested object data start 
    //Ajax orthogonal data start here
    $('#orthogonal-data').DataTable({       
        columns: [{
            data: "name"
        }, {
            data: "position"
        }, {
            data: "office"
        }, {
            data: "extn"
        }, {
            data: {
                _: "start_date.display",
                sort: "start_date.timestamp"
            }
        }, {
            data: "salary"
        }]
    });
    //Ajax orthogonal data end here
    // Ajax Generated content for a column start
    var generatetable = $('#auto-generate-content').DataTable({        
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<button>Click!</button>"
        }]
    });
    $('#auto-generate-content tbody').on('click', 'button', function() {
        var data = generatetable.row($(this).parents('tr')).data();
        alert(data[0] + "'s salary is: " + data[5]);
    });
    // Ajax Generated content for a column end
    //Ajax render start here
    $('#render-datatable').DataTable({       
        "deferRender": true
    });
    //Ajax render end here
    // Server Side proccessing start
    $('#server-side-datatable').DataTable( {
        "processing": true,
        "serverSide": true        
    });
    //http server side datatable start   
    $('#datatable-http').DataTable({
        "processing": true,
        "serverSide": true,       
        "columns": [{
            "data": "first_name"
        }, {
            "data": "last_name"
        }, {    
            "data": "position"
        }, {
            "data": "office"    
        }, {
            "data": "start_date"
        }, {
            "data": "salary"
        }]
    });
    //http server side datatable end
    //datatable post start here
    $('#datatable-post').DataTable({
        "processing": true,
        "serverSide": true,        
        "columns": [{
            "data": "first_name"
        }, {
            "data": "last_name"
        }, {
            "data": "position"
        }, {
            "data": "office"
        }, {
            "data": "start_date"
        }, {
            "data": "salary"
        }]
    });
    //datatable post start here
    var table = $('#dt-plugin-method').DataTable();
    $('<button class="btn btn-primary  m-b-20">sum of age in all rows</button>').prependTo('.dt-plugin-buttons').on('click', function() {
        alert('Column sum is: ' + table.column(3).data().sum());
    });
    $('<button class="btn btn-primary m-r-10 m-b-20">sum of  age of visible rows</button>').prependTo('.dt-plugin-buttons').on('click', function() {
        alert('Column sum is: ' + table.column(3, {
            page: 'current'
        }).data().sum());
    });
    //Api datatable end here
    //Ordering Plug-ins (with type detection) start here
    $.fn.dataTable.ext.type.detect.unshift(function(d) {
        return d === 'Low' || d === 'Medium' || d === 'High' ? 'salary-grade' : null;
    });
    $.fn.dataTable.ext.type.order['salary-grade-pre'] = function(d) {
        switch (d) {
            case 'Low':
                return 1;
            case 'Medium':
                return 2;
            case 'High':
                return 3;
        }
        return 0;
    };
    $('#datatable-ordering').DataTable();
    //Ordering Plug-ins (with type detection) end here
    //Range plugin datatable start here
    $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
        var min = parseInt($('#min').val(), 10);
        var max = parseInt($('#max').val(), 10);
        var age = parseFloat(data[3]) || 0;
        if ((isNaN(min) && isNaN(max)) || (isNaN(min) && age <= max) || (min <= age && isNaN(max)) || (min <= age && age <= max)) {
            return true;
        }
            return false;
    });
    var dtage = $('#datatable-range').DataTable();
    $('#min, #max').keyup(function() {
        dtage.draw();
    });
    //Range plugin datatable end here    
    //datatable dom ordering start here
    $.fn.dataTable.ext.order['dom-text'] = function(settings, col) {
        return this.api().column(col, {
            order: 'index'
        }).nodes().map(function(td, i) {
            return $('input', td).val();
        });
    }
    $.fn.dataTable.ext.order['dom-text-numeric'] = function(settings, col) {
        return this.api().column(col, {
            order: 'index'
        }).nodes().map(function(td, i) {
            return $('input', td).val() * 1;
        });
    }
    $.fn.dataTable.ext.order['dom-select'] = function(settings, col) {
        return this.api().column(col, {
            order: 'index'
        }).nodes().map(function(td, i) {
            return $('select', td).val();
        });
    }   
    $.fn.dataTable.ext.order['dom-checkbox'] = function(settings, col) {
        return this.api().column(col, {
            order: 'index'
        }).nodes().map(function(td, i) {
            return $('input', td).prop('checked') ? '1' : '0';
        });
    }
    $(document).ready(function() {
        $('#datatable-livedom').DataTable({
            "columns": [null, {
                "orderDataType": "dom-text-numeric"
            }, {
                "orderDataType": "dom-text",
                type: 'string'
            }, {
                "orderDataType": "dom-select"
            }]
        });
    });
    //datatable dom ordering end here


});