(function($) {
  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;
      matches = [];
      substrRegex = new RegExp(q, 'i');
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });
      cb(matches);
    };
  };
  var char = ['Naruto', 'Sazuke', 'Indra', 'Ashura','Hashirama','Madara','Itachi','Minato','Kakashi','Obito','Shizui','Pein','Kagami','Jiraiya'
  ];
  $('#the-basics .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'states',
    source: substringMatcher(char)
  });  
  var char2 = ['Naruto', 'Sazuke', 'Indra', 'Ashura','Hashirama','Madara','Itachi','Minato','Kakashi','Obito','Shizui','Pein','Kagami','Jiraiya'
  ];
  var char2 = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local:char2
  });
  $('#prefetch .typeahead').typeahead(null, {
    name: 'countries',
    source: char2
  });
 
   
    var states = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: [
        "Indonesia",
        "Malaysia",
        "Thailand",
        "Singpore",
        "Vietnam"
      ]
    });
    $('#rtl-support .typeahead').typeahead({
      hint: false
    },
    {
      name: 'arabic-phrases',
      source: states
    });
})(jQuery);