import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function SobreOProjeto() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus !== "true") {
      navigate("/login");
      return;
    }
    setIsAuthenticated(true);
  }, [navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={true} />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Sobre o Projeto
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Um projeto com propósito: conectar conhecimento através da educação 
            e transformar vidas em comunidades que mais precisam.
          </p>
        </div>

        {/* Fluxograma visual com cards conectados */}
        <div className="relative max-w-6xl mx-auto">
          {/* Linha conectora */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/30 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {/* Card 1: Carência de Profissionais */}
            <Card className="shadow-card hover:shadow-hover transition-shadow duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Carência de Profissionais nas ONGs
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Muitas organizações não-governamentais enfrentam dificuldades 
                  para encontrar profissionais qualificados, especialmente na 
                  área educacional, limitando seu impacto social.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1491341899189-e30e4e03d4de?w=300&h=200&fit=crop" 
                  alt="Professores em sala de aula"
                  className="w-full h-32 object-cover rounded-md mt-4"
                />
              </CardContent>
            </Card>

            {/* Card 2: Impacto Social */}
            <Card className="shadow-card hover:shadow-hover transition-shadow duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Impacto Social pela Educação
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A educação é a ferramenta mais poderosa para transformar 
                  comunidades. Professores voluntários podem multiplicar 
                  conhecimento e criar oportunidades de crescimento.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop" 
                  alt="Crianças estudando"
                  className="w-full h-32 object-cover rounded-md mt-4"
                />
              </CardContent>
            </Card>

            {/* Card 3: Projeto com Propósito */}
            <Card className="shadow-card hover:shadow-hover transition-shadow duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Um Projeto com Propósito
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa plataforma conecta essas duas necessidades: 
                  professores que querem fazer a diferença e ONGs que 
                  precisam de apoio educacional especializado.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop" 
                  alt="Pessoas trabalhando juntas"
                  className="w-full h-32 object-cover rounded-md mt-4"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Seção de resultados esperados */}
        <div className="mt-20 bg-accent rounded-lg p-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Resultados Esperados
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-accent-foreground">Professores voluntários</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-accent-foreground">ONGs parceiras</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10.000+</div>
                <p className="text-accent-foreground">Vidas impactadas</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer variant="complete" />
    </div>
  );
}