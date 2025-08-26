
    //PRELIM
    const Pquiz1 = document.getElementById("Pquiz1")|| { value: 0 };
    const Pquiz2 = document.getElementById("Pquiz2")|| { value: 0 };
    const Pquiz3 = document.getElementById("Pquiz3")|| { value: 0 };
    const Plab1 = document.getElementById("Plab1")|| { value: 0 };
    const Plab2 = document.getElementById("Plab2")|| { value: 0 };
    const Plab3 = document.getElementById("Plab3")|| { value: 0 };
    const Pass1 = document.getElementById("Pass1")|| { value: 0 };
    const Pass2 = document.getElementById("Pass2")|| { value: 0 };
    const Pexam = document.getElementById("Pexam")|| { value: 0 };
    const Presult = document.getElementById("Presult")|| { value: 0 };

    //MIDTERM
    const Prelim = document.getElementById("Prelim")|| { value: 0 };
    const Mquiz1 = document.getElementById("Mquiz1")|| { value: 0 };
    const Mquiz2 = document.getElementById("Mquiz2")|| { value: 0 };
    const Mquiz3 = document.getElementById("Mquiz3")|| { value: 0 };
    const Mlab1 = document.getElementById("Mlab1")|| { value: 0 };
    const Mlab2 = document.getElementById("Mlab2")|| { value: 0 };
    const Mlab3 = document.getElementById("Mlab3")|| { value: 0 };
    const Mass1 = document.getElementById("Mass1")|| { value: 0 };
    const Mass2 = document.getElementById("Mass2")|| { value: 0 };
    const Mexam = document.getElementById("Mexam")|| { value: 0 };
    const Mresult = document.getElementById("Mresult")|| { value: 0 };

    //FINALS
    const Midterm = document.getElementById("Midterm")|| { value: 0 };
    const Fquiz1 = document.getElementById("Fquiz1")|| { value: 0 };
    const Fquiz2 = document.getElementById("Fquiz2")|| { value: 0 };
    const Fquiz3 = document.getElementById("Fquiz3")|| { value: 0 };
    const Flab1 = document.getElementById("Flab1")|| { value: 0 };
    const Flab2 = document.getElementById("Flab2")|| { value: 0 };
    const Flab3 = document.getElementById("Flab3")|| { value: 0 };
    const Fass1 = document.getElementById("Fass1")|| { value: 0 };
    const Fass2 = document.getElementById("Fass2")|| { value: 0 };
    const Fexam = document.getElementById("Fexam")|| { value: 0 };
    const Fresult = document.getElementById("Fresult")|| { value: 0 };




function Compute(){

    //PRELIM
    let Pquizzes = (Number(Pquiz1.value) + Number(Pquiz2.value) + Number(Pquiz3.value)) / 3 ;
    let Pactivities = (Number(Plab1.value) + Number(Plab2.value) + Number(Plab3.value)) / 3 ;
    let Passignments = (Number(Pass1.value) + Number(Pass2.value)) / 2;
    let PE = Number(Pexam.value);
    //MIDTERM
    let Mquizzes = (Number(Mquiz1.value) + Number(Mquiz2.value) + Number(Mquiz3.value)) / 3 ;
    let Mactivities = (Number(Mlab1.value) + Number(Mlab2.value) + Number(Mlab3.value)) / 3 ;
    let Massignments = (Number(Mass1.value) + Number(Mass2.value)) / 2;
    let ME = Number(Mexam.value);
    //FINALS
    let Fquizzes = (Number(Fquiz1.value) + Number(Fquiz2.value) + Number(Fquiz3.value)) / 3 ;
    let Factivities = (Number(Flab1.value) + Number(Flab2.value) + Number(Flab3.value)) / 3 ;
    let Fassignments = (Number(Fass1.value) + Number(Fass2.value)) / 2;
    let FE = Number(Fexam.value);

    let PCS = (Pquizzes*0.60) + (Passignments*0.20) + (Pactivities*0.20) ;
    let MCS = (Mquizzes*0.60) + (Massignments*0.20) + (Mactivities*0.20) ;
    let FCS = (Fquizzes*0.60) + (Fassignments*0.20) + (Factivities*0.20) ;

    let TMG = (MCS * 0.50) + (ME * 0.50);
    let TFG = (FCS * 0.50) + (FE * 0.50);

    let PG = (PCS * 0.50) + (PE * 0.50);
    let MG = (1/3 * Number(Prelim.value)) + (2/3 *TMG);
    let FG = (1/3 * Number(Midterm.value)) + (2/3 *TFG);

    Presult.value = Number(PG.toFixed(1));
    Mresult.value = Number(MG.toFixed(1));
    Fresult.value = Number(FG.toFixed(1));



}

function Reset(){
    //PRELIM
    Pquiz1.value = "";
    Pquiz2.value = "";
    Pquiz3.value = "";
    Plab1.value = "";
    Plab2.value = "";
    Plab3.value = "";
    Pass1.value = "";
    Pass2.value = "";
    Pexam.value = "";
    Presult.value = "";
    //MIDTERM
    Mquiz1.value = "";
    Mquiz2.value = "";
    Mquiz3.value = "";
    Mlab1.value = "";
    Mlab2.value = "";
    Mlab3.value = "";
    Mass1.value = "";
    Mass2.value = "";
    Mexam.value = "";
    Mresult.value = "";
    //FINALS
    Fquiz1.value = "";
    Fquiz2.value = "";
    Fquiz3.value = "";
    Flab1.value = "";
    Flab2.value = "";
    Flab3.value = "";
    Fass1.value = "";
    Fass2.value = "";
    Fexam.value = "";
    Fresult.value = "";
    Prelim.value = "";
    Midterm.value = "";
}

