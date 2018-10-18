angular.module('starter.services', [])
.factory('ProjectsService', function() {
  var projects = [
    { title: 'kjhsrk herkjherkjth ekjrht kjerh tkjerh tkjerhReggae', id: 1 },
    { title: 'kjhsrk herkjherkjth ekjrht kjerh tkjerh tkjerhChill', id: 2 },
    { title: 'kjhsrk herkjherkjth ekjrht kjerh tkjerh tkjerhDubstep', id: 3 },
    { title: 'kjhsrk herkjherkjth ekjrht kjerh tkjerh tkjerhIndie', id: 4 },
    { title: 'kjhsrk herkjherkjth ekjrht kjerh tkjerh tkjerhRap', id: 5 },
    { title: 'kjhsrk herkjherkjth ekjrht kjerh tkjerh tkjerhCowbell', id: 6 }
  ];

  return {
    index : function() {
      return projects;
    },

    show : function(id) {
      return projects[id];
    }
  }
});
