function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  str1= str1.toLowerCase();
  str2= str2.toLowerCase();
  
  if ((str1.split('').sort()).join() == (str2.split('').sort()).join())
    return true; 
    return false;
}




module.exports = esAnagrama;

esAnagrama('hola', 'hola');

esAnagrama('hola', 'aloh');

esAnagrama('hola', 'holaa');

esAnagrama('hola', 'holb');

esAnagrama('hola mundo', 'mundo hola');

esAnagrama('Hola', 'aloh');

esAnagrama('hola!', '!aloh');

esAnagrama('', '');
