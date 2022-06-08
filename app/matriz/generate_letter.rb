class GenerateLetter

        def generate
            # generar una matriz de 10x10
            matriz = Array.new(16) { Array.new(16) }
            letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
            arreglo = []
            palabra1 =  Letter.all
            
            palabra1.each do |palabra|
                arreglo.push(palabra.response)
            end


            (0..15).each do |i|
                (0..15).each do |j|
                    matriz[i][j] = letras[rand(26)]
                end
            end


            completaPalabra(arreglo, matriz)

        end 

        
    def  completaPalabra(palabra, matriz)
       
        i = 0
        while i < palabra.length
             if  i == 0
                 palabra[i].length.times do |j|
                     matriz[15][j] = palabra[i][j]
                 end
                 elsif  i == 1
                     palabra[i].length.times do |j|
                         matriz[9][j] = palabra[i][j]
                     end
                 elsif  i == 2
                     palabra[i].length.times do |j|
                         matriz[j][j] = palabra[i][j]
                     end
                 elsif  i == 3
                     palabra[i].length.times do |j|
                         matriz[j][15] = palabra[i][j]
                     end
                 elsif  i == 4
                     palabra[i].length.times do |j|
                         matriz[j][8] = palabra[i][j]
                     end
                 elsif  i == 5
                     palabra.length.times do |j|
                         matriz[10][j] = palabra[i][j]
                     end
             end
         i  += 1
       end
 
         return matriz
     end
        

end