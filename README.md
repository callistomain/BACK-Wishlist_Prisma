**GET: /movies**  
*Lista todos os filmes.*

**GET: /movies/genres**  
*Traz todos os gêneros e lista a quantidade de filmes em cada um.*

**POST: /movies  
Body: { "name": "ABC", "platform": "Netflix", "genres": ["comedy", "drama"] }**  
*Adiciona um filme.*

**POST: /movies/:id/note  
Body: { "note": "Muito bom!", "user": "Jose" }**  
*Marca o filme como assistido e adiciona uma anotação para usuário determinado. \*usuário é criado.*

**DELETE: /movies/:id**  
*Deleta um filme pelo id.*
