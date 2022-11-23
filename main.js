function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cYyX0PfCt/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);

}