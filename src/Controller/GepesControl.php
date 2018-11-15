<?php

namespace App\Controller;


use App\Entity\Manchete;
use App\Entity\TemaDaManchete;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class GepesControl extends AbstractController {

    /**
     * @Route("/gepes")
     */
    public function homepage(EntityManagerInterface $em){
//        return new Response('first try');

        $repository = $em->getRepository(Manchete::class);
        $manchetes = $repository->findAll();



        $repository = $em->getRepository(TemaDaManchete::class);
        $temas = $repository->findAll();


//        dump($manchetes, $temas, $this);

//        $file = $manchetes->arquivoDaImagem()->getDocFile();

//        dump($manchetes);

        return $this->render('gepes.html.twig',
            ['manchetes' => $manchetes]);
    }
}