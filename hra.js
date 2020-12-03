var Hra = {
    okienka : [],

    init: function() {
        this.okienka = []
        for (var i = 0; i < 24; i++){
            this.okienka.push(i+1);
        }
        this.okienka.sort(this.shuffle);
    },
    generuj: function(){
        var str = '';
        for (var i = 0; i < this.okienka.length; i++){
            str += `<div><span id="${this.okienka[i]}" style='display: inline' style>${this.okienka[i]}</span><img src=obrazky/0.gif 
            alt="${this.okienka[i]}" width="100" height="100" value="0" onclick="Hra.otoc(this)"></div>`;
        }
        document.getElementById('hra').innerHTML += str;
    },
    shuffle: function() {
        return 0.5 - Math.random();
    },
    otoc: function(img) {
        var date = new Date();
        var den = date.getDate();
        if (parseInt(img.alt) <= den) {
            if (img.value == '0'){
                hudba.start();
                img.src = `obrazky/${img.alt}.gif`;
                img.value = "1";
                document.getElementById(`${img.alt}`).style = 'display: none'
                document.getElementById('sprava').innerHTML = '&nbsp;';
            }else{
                img.src = `obrazky/0.gif`;
                img.value = "0"
                document.getElementById(`${img.alt}`).style = 'display: inline'
                document.getElementById('sprava').innerHTML = '&nbsp;';
            }
        }else{
            document.getElementById('sprava').innerHTML += '<span  class="nadpis">&nbsp;Toto okienko ešte nemôžeš otvoriť, buď trpezlivý :)</span>';
        }
    }

}

Hra.init();
