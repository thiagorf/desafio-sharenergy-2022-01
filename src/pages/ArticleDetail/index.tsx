import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Link, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate, useParams,  } from "react-router-dom"
import { getContentBy } from "../../services/newsApi"
import { dateFormat } from "../../shared/date"
import { NewsResponse } from "../../shared/types"

export const ArticleDetail = () => {
    const [article, setArticle] = useState<NewsResponse>()
    const [loading, setLoading] = useState(true)


    const { id } = useParams()
    
    const navigate = useNavigate()

    function handleNext(nextId: number){
      navigate(`/${nextId + 1}`)
    }

    function handlePrevious(previousId: number) {
      navigate(`/${previousId - 1}`)
    }

    useEffect(() => {
        async function getSpecificArticle() {
          try {
            const response = await getContentBy(id)

            setArticle(response);
            setLoading(false)
          } catch (error) {
            navigate(-1)
          }
            
        }
        getSpecificArticle()
        
    }, [id])

    return (
        <Box sx={{
            mx: "auto",
            minWidth: "21.57rem",
            width: "80%",
            maxWidth: "45rem"
        }}>
            {loading ? <CircularProgress sx={{
                alignSelf: {md: "center"},
                margin: "auto",
            }}/> : 
                <Card >
                <CardMedia
                  component="img"
                  height="140"
                  src={article.imageUrl}
                  alt={`broken image from ${article.newsSite}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                    <Typography variant="subtitle2" color="text.secondary">
                    {article.newsSite} - Postado em {dateFormat(article.publishedAt)} 
                  </Typography>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.summary}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    disabled={(Number(id) <= 1)}
                    size="small" 
                    onClick={() => handlePrevious(article.id)}
                  >
                    Anterior
                  </Button>
                  <Link 
                    href={article.url}
                    target="_blank" rel="noopener" 
                    underline="none">
                    <Button>
                        Ver Mais
                    </Button>
                  </Link>
                  <Button size="small" onClick={() => handleNext(article.id)}>Proximo</Button>
                </CardActions>
              </Card>
            }
        </Box>
    )
}