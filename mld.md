# MLD — Blog (modèle logique de données)

```
users(#id, name, email, password_hash, role, created_at)
posts(#id, title, slug, excerpt, content, status, #author_id→users, created_at, updated_at, published_at)
```

- `#` — clé primaire  
- `→` — clé étrangère  
- Relation : **users** 1,n — **posts** 0,1  
