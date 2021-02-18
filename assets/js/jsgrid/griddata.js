'use strict';
(function() {
    var db = {
        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Name || client.Name.indexOf(filter.Name) > -1)
                    && (!filter.Age || client.Age === filter.Age)
                    && (!filter.Address || client.Address.indexOf(filter.Address) > -1)
                    && (!filter.Country || client.Country === filter.Country)
                    && (filter.Married === undefined || client.Married === filter.Married);
            });
        },
        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },
        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }
    };
    window.db = db;
    db.countries = [
        { Name: "ALL", Id: 0 },
        { Name: "Indonesia", Id: 1 },
        { Name: "Malaysia", Id: 2 },
        { Name: "Filipine", Id: 3 },
        { Name: "Singapore", Id: 4 },
        { Name: "Vietnam", Id: 5 },
        { Name: "Thailand", Id: 6 },
        { Name: "China", Id: 7 },
        { Name: "Japan", Id: 8 }
    ];
    db.clients = [
        {
            "Name": "Asok",
            "Age": 29,
            "Country": 1,
            "Address": "Makassar",
            "Married": true
        },
        {
            "Name": "Ipin",
            "Age": 20,
            "Country": 2,
            "Address": "Durian Runtuh",
            "Married": false
        },
        {
            "Name": "Leo",
            "Age": 60,
            "Country": 1,
            "Address": "Makassar",
            "Married": true
        },
        {
            "Name": "Upin",
            "Age": 20,
            "Country": 2,
            "Address": "Durian runtuh",
            "Married": false
        },
        {
            "Name": "Chen Li",
            "Age": 65,
            "Country": 7,
            "Address": "Beijing",
            "Married": false
        },
        {
            "Name": "Joe",
            "Age": 40,
            "Country": 3,
            "Address": "Manila",
            "Married": true
        },
        {
            "Name": "Boy",
            "Age": 30,
            "Country": 4,
            "Address": "Singapore River",
            "Married": false
        },
        {
            "Name": "Bao",
            "Age": 30,
            "Country": 5,
            "Address": "Nha Trang",
            "Married": false
        },
        {
            "Name": "Agatha",
            "Age": 29,
            "Country": 8,
            "Address": "Tokyo",
            "Married": false
        },
        {
            "Name": "Uttang",
            "Age": 29,
            "Country": 1,
            "Address": "Makassar",
            "Married": false
        },
        {
            "Name": "Bambang",
            "Age": 60,
            "Country": 1,
            "Address": "Makassar",
            "Married": true
        },
        {
            "Name": "Kannika",
            "Age": 29,
            "Country": 6,
            "Address": "Nakhon",
            "Married": false
        },
        {
            "Name": "Riyan",
            "Age": 29,
            "Country": 1,
            "Address": "Jakarta",
            "Married": false
        },
        {
            "Name": "Bobi",
            "Age": 29,
            "Country": 1,
            "Address": "Bandung",
            "Married": true
        },
        {
            "Name": "Jarjit",
            "Age": 20,
            "Country": 2,
            "Address": "Durian Runtuh",
            "Married": false
        },
        {
            "Name": "Adam",
            "Age": 35,
            "Country": 1,
            "Address": "Bandung",
            "Married": true
        },
        {
            "Name": "Daeng Coding",
            "Age": 29,
            "Country": 1,
            "Address": "Makassar",
            "Married": true
        }
    ];
    db.users = [
        {
            "ID": "x",
            "Account": "A758A693-0302-03D1-AE53-EEFE22855556",
            "Name": "Asok",
            "RegisterDate": "2020-04-20T22:55:52-07:00"
        },
        {
            "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
            "Name": "Uttang",
            "RegisterDate": "2020-02-22T05:59:55-08:00"
        },
        {
            "Account": "06FAAD9A-5114-08F6-D60C-961B2528B4F0",
            "Name": "Leo",
            "RegisterDate": "2020-08-13T09:17:49-07:00"
        },
        {
            "Account": "EED7653D-7DD9-A722-64A8-36A55ECDBE77",
            "Name": "Bambang",
            "RegisterDate": "2020-02-27T01:31:07-08:00"
        },
        {
            "Account": "2A2E6D40-FEBD-C643-A751-9AB4CAF1E2F6",
            "Name": "Upin",
            "RegisterDate": "2020-06-25T15:49:54-07:00"
        },
        {
            "Account": "3978F8FA-DFF0-DA0E-0A5D-EB9D281A3286",
            "Name": "Ipin",
            "RegisterDate": "2020-11-10T07:29:41-08:00"
        },
        {
            "Account": "658DBF5A-176E-569A-9273-74FB5F69FA42",
            "Name": "Jarjit",
            "RegisterDate": "2020-06-24T09:11:19-07:00"
        },
        {
            "Account": "76D2EE4B-7A73-1212-F6F2-957EF8C1F907",
            "Name": "Chen Li",
            "RegisterDate": "2020-04-13T20:06:29-07:00"
        },
        {
            "Account": "00E46809-A595-CE82-C5B4-D1CAEB7E3E58",
            "Name": "Bobi",
            "RegisterDate": "2020-08-21T18:59:38-07:00"
        },
        {
            "Account": "C196781C-DDCC-AF83-DDC2-CA3E851A47A0",
            "Name": "Adam",
            "RegisterDate": "2020-11-15T00:38:37-08:00"
        },
        {
            "Account": "5911F201-818A-B393-5888-13157CE0D63F",
            "Name": "Kannika",
            "RegisterDate": "2020-05-27T17:35:32-07:00"
        },
        {
            "Account": "B8BB78F9-E1A1-A956-086F-E12B6FE168B6",
            "Name": "Bao",
            "RegisterDate": "2020-07-08T16:58:06-07:00"
        },
        {
            "Account": "06F636C3-9599-1A2D-5FD5-86B24ADDE626",
            "Name": "Agatha",
            "RegisterDate": "2020-06-30T14:30:10-07:00"
        },
        {
            "Account": "FE880CDD-F6E7-75CB-743C-64C6DE192412",
            "Name": "Boy",
            "RegisterDate": "2020-06-11T16:35:07-07:00"
        },
        {
            "Account": "BBEDD673-E2C1-4872-A5D3-C4EBD4BE0A12",
            "Name": "Riyan",
            "RegisterDate": "2021-03-16T20:18:29-08:00"
        },
        {
            "Account": "19BC22FA-C52E-0CC6-9552-10365C755FAC",
            "Name": "Bambang",
            "RegisterDate": "2021-11-01T01:56:34-07:00"
        },
        {
            "Account": "A8292214-2C13-5989-3419-6B83DD637D6C",
            "Name": "Daeng Coding",
            "RegisterDate": "2008-03-13T19:21:04-07:00"
        }
     ];
}());