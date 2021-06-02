describe('Les chaines de caractères : ', function () {//on décrit la fonctionnalité
  // "it" indique le comportement attendu
    it('Donner la taille d\'une chaine de caractères', function () {
      // on crée un exemple
        var result = tailleString('Ce texte à une certaine taille');
        // on donne le résultat attendu
        expect(result).toEqual(30);
    });

    it('Remplacer le premier e d\'une chaine par un espace', function () {
      var replace = replaceLetter('Pepito');
      expect(replace).toBe('P pito');
    });
    
    it('Concatener deux chaines de caractères', function () {
      var concatenate = toConcatenate('Pepito');
      expect(concatenate).toBe('Pepito Pepita');
    });
    
    it('Afficher le cinquième caractère d\'une chaine', function () {
      var showLetter = fifthLetter('Pepito');
      expect(showLetter).toMatch('t');
    });
    
    it('Afficher les 9 premiers caractères d\'une chaîne de caractères', function () {
      var showLetters = nineLetters('anticonstitutionnellement');
      expect(showLetters).toMatch('anticonst');
    });
    
    it('Mettre en majuscule la chaine', function () {
      var upperCase = bigLetters('Pepito');
      expect(upperCase).toBe('PEPITO');
    });
    
    it('Mettre en minuscule la chaine', function () {
      var lowCase = smallLetters('Pepito');
      expect(lowCase).toBe('pepito');
    });

    it('Supprimer les espaces avant et après la chaine', function () {
      var cancel = cancelSpace('P e p i t o ');
      expect(cancel).toBe('Pepito');
    });

    it('Afficher true si le parametre d\'entrée de la fonction est de type string', function () {
      var string = trueOrFalse('I am a string');
      expect(string).toBeTrue();
    });

    it('Afficher l\'extension du fichier', function () {
      var extension = showExtension('index.html');
      expect(extension).toContain('html')
    });

    it('Compter le nombre d\'espace dans la chaine', function () {
      var spaces = howManySpace('Who run the world?');
      expect(spaces).toEqual(3);
    });

    it('Inverser une chaine de caractères', function () {
      var reverse = reverseLetters('babibel');
      expect(reverse).toMatch('lebibab');
    });
})
