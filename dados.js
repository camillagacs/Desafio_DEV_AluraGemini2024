let dados = [
  {
    titulo: "Pilhas",
    descricao: "Pilhas usadas podem liberar metais pesados e substâncias tóxicas que contaminam solo e água, prejudicando gravemente a saúde humana e animal. Descarte-as corretamente em pontos de coleta específicos disponíveis em lojas e centros de reciclagem para evitar poluição e riscos à saúde."
  },
  {
    titulo: "Baterias de Celular",
    descricao: "Baterias de celular descartadas de maneira inadequada poluem o ambiente com metais pesados e podem causar sérios problemas respiratórios e neurológicos. Deposite-as em pontos de coleta para baterias, frequentemente encontrados em lojas de eletrônicos e estabelecimentos comerciais."
  },
  {
    titulo: "Cartucho de Impressoras",
    descricao: "Cartuchos de impressora contêm tintas e produtos químicos que podem poluir e prejudicar a saúde. Muitos fabricantes oferecem programas de devolução; aproveite-os e evite a contaminação do meio ambiente e riscos à saúde."
  },
  {
    titulo: "Celulares",
    descricao: "Celulares antigos podem liberar metais pesados e substâncias tóxicas que poluem o solo e afetam a saúde. Para um descarte seguro, leve-os a centros de reciclagem especializados em eletrônicos, evitando impactos negativos no meio ambiente."
  },
  {
    titulo: "Carregadores de Celular",
    descricao: "Carregadores descartados inadequadamente não apenas poluem com metais e plásticos, mas também representam risco de incêndio. Entregue-os em pontos de coleta para eletrônicos, onde serão reciclados de forma segura."
  },
  {
    titulo: "Antenas de TV",
    descricao: "Antenas de TV podem liberar metais pesados ao serem descartadas incorretamente, afetando a saúde e o meio ambiente. Recicle-as em pontos de coleta de eletrônicos ou centros especializados para evitar a poluição."
  },
  {
    titulo: "Amianto",
    descricao: "O amianto, quando descartado inadequadamente, pode liberar fibras tóxicas que causam doenças respiratórias graves, como câncer. Para o descarte seguro, consulte empresas especializadas em remoção e reciclagem de amianto."
  },
  {
    titulo: "Lâmpadas Fluorescentes",
    descricao: "Lâmpadas fluorescentes liberam mercúrio e outros metais pesados quando descartadas de forma inadequada, expondo as pessoas a riscos tóxicos. Deixe-as em pontos de coleta específicos para lâmpadas, onde serão corretamente recicladas."
  },
  {
    titulo: "Lata de Aerossol",
    descricao: "Latas de aerossol podem liberar resíduos químicos perigosos e representar risco de explosão. Descarte-as em centros de reciclagem que aceitam aerossóis ou em pontos de coleta específicos."
  },
  {
    titulo: "Monitores",
    descricao: "Monitores contêm metais pesados, como chumbo e mercúrio, que podem causar sérios problemas de saúde e poluição. Leve-os a centros de reciclagem especializados em eletrônicos para um descarte seguro e responsável."
  },
  {
    titulo: "Medicamentos",
    descricao: "Medicamentos fora de uso podem contaminar solo e água, afetando a saúde pública e a vida selvagem. Devolva-os a farmácias ou centros de coleta que aceitam medicamentos vencidos para evitar contaminação ambiental."
  },
  {
    titulo: "Reatores",
    descricao: "Reatores podem liberar materiais radioativos e tóxicos, representando risco de radiação. Para o descarte seguro, procure empresas especializadas em gestão de resíduos perigosos."
  },
  {
    titulo: "Plástico",
    descricao: "Plásticos não biodegradáveis poluem o meio ambiente com microplásticos e podem afetar a saúde de seres vivos. Recicle plásticos em centros de coleta de recicláveis e reduza o impacto ambiental."
  },
  {
    titulo: "Garrafa PET",
    descricao: "Garrafas PET descartadas incorretamente poluem o ambiente com plásticos que demoram a se decompor e podem liberar substâncias químicas. Deixe-as em centros de reciclagem para garantir uma destinação adequada."
  },
  {
    titulo: "Vidro",
    descricao: "Vidros quebrados ou descartados inadequadamente podem causar ferimentos e poluir o meio ambiente com produtos químicos. Recicle vidro em pontos de coleta de recicláveis ou centros especializados."
  },
  {
    titulo: "Sucata",
    descricao: "Sucata pode liberar metais pesados e resíduos tóxicos que são prejudiciais à saúde e ao meio ambiente. Leve-a a centros de reciclagem de metais e sucata para um descarte responsável."
  },
  {
    titulo: "Roupas",
    descricao: "Roupas descartadas inadequadamente podem liberar fibras sintéticas e produtos químicos, afetando o meio ambiente e a saúde. Doe roupas em centros de doação ou leve-as a pontos de coleta para reciclagem têxtil."
  },
  {
    titulo: "Computador",
    descricao: "Computadores contêm metais pesados e substâncias tóxicas que podem poluir e afetar a saúde. Leve-os a centros de reciclagem de eletrônicos para um descarte seguro e ecológico."
  },
  {
    titulo: "Teclados de Computador",
    descricao: "Teclados de computador podem liberar plásticos e metais pesados quando descartados inadequadamente. Recicle-os em pontos de coleta para eletrônicos ou centros especializados."
  },
  {
    titulo: "Caixas de Papelão",
    descricao: "Caixas de papelão descartadas de forma inadequada podem liberar produtos químicos e poluir o meio ambiente. Recicle papelão em centros de coleta de recicláveis para evitar impacto ambiental."
  },
  {
    titulo: "Latas de Alumínio",
    descricao: "Latas de alumínio podem liberar resíduos tóxicos e poluir o ambiente se descartadas incorretamente. Recicle-as em pontos de coleta de recicláveis para reduzir o impacto ambiental."
  },
  {
    titulo: "Fontes",
    descricao: "Fontes descartadas inadequadamente podem liberar metais pesados e substâncias tóxicas, afetando a saúde e o meio ambiente. Entregue-as em centros de reciclagem especializados em eletrônicos."
  },
  {
    titulo: "Toners",
    descricao: "Toners contêm produtos químicos tóxicos que podem afetar a saúde e o meio ambiente. Descarte-os em centros de reciclagem de eletrônicos que aceitam toners usados."
  },
  {
    titulo: "Sacolas",
    descricao: "Sacolas plásticas podem poluir o meio ambiente com microplásticos e substâncias não biodegradáveis. Recicle-as em pontos de coleta de recicláveis para minimizar o impacto ambiental."
  }
];