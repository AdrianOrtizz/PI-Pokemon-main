
export const validate = (form) => {
    let errors = {}
    
    const regexOnlyLetters = /^[a-zA-Z\s]+$/;
    const regexOnlyNumbers = /^[0-9]+$/;
    const regexURL = /^(ftp|http|https):\/\/[^ "]+$/;

    if(!regexOnlyLetters.test(form.name)){
        errors = {...errors, name: 'The Pokémon cannot have numbers or any other special characters in its name.'}
    }

    if(!regexURL.test(form.image)){
        errors = {...errors, image: 'The image must be a URL'}
    }

    if(!regexURL.test(form.imageShiny)){
        errors = {...errors, imageShiny: 'The image must be a URL'}
    }

    if(form.hp < 1 || form.hp > 255){
        errors = {...errors, hp: 'The statistic must be greater than or equal to 1 and less than or equal to 255'}
    }

    if(!regexOnlyNumbers.test(form.hp)){
        errors = {...errors, hp: 'Statistics can only have numbers'}
    }

    if(form.attack < 1 || form.attack > 255){
        errors = {...errors, attack: 'The statistic must be greater than or equal to 1 and less than or equal to 255'}
    }

    if(!regexOnlyNumbers.test(form.attack)){
        errors = {...errors, attack: 'Statistics can only have numbers'}
    }

    if(form.defense < 1 || form.defense > 255){
        errors = {...errors, defense: 'The statistic must be greater than or equal to 1 and less than or equal to 255'}
    }

    if(!regexOnlyNumbers.test(form.defense)){
        errors = {...errors, defense: 'Statistics can only have numbers'}
    }

    if(form.specialAttack < 1 || form.specialAttack > 255){
        errors = {...errors, specialAttack: 'The statistic must be greater than or equal to 1 and less than or equal to 255'}
    }

    if(!regexOnlyNumbers.test(form.specialAttack)){
        errors = {...errors, specialAttack: 'Statistics can only have numbers'}
    }
    
    if(form.specialDefense < 1 || form.specialDefense > 255){
        errors = {...errors, specialDefense: 'The statistic must be greater than or equal to 1 and less than or equal to 255'}
    }

    if(!regexOnlyNumbers.test(form.specialDefense)){
        errors = {...errors, specialDefense: 'Statistics can only have numbers'}
    }
    
    if(form.speed < 1 || form.speed > 255){
        errors = {...errors, speed: 'The statistic must be greater than or equal to 1 and less than or equal to 255'}
    }

    if(!regexOnlyNumbers.test(form.speed)){
        errors = {...errors, speed: 'Statistics can only have numbers'}
    }

    if(form.height < 0){
        errors = {...errors, height: "The pokemon's height must be greater than 0"}
    }

    if(!regexOnlyNumbers.test(form.height)){
        errors = {...errors, height: 'Statistics can only have numbers'}
    }

    if(form.weight < 0){
        errors = {...errors, weight: "The pokemon's weight must be greater than 0"}
    }

    if(!regexOnlyNumbers.test(form.weight)){
        errors = {...errors, weight: 'Statistics can only have numbers'}
    }

    if(form.type1 === form.type2){
        errors = {...errors, types: 'The types cannot be the same'}
    }

    return errors;
}