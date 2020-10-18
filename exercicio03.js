function temHabilidade(habilidades) {

  var hasSkill = (habilidades.indexOf("React Native"));

  console.log(hasSkill > -1 ? true : false );

}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills);