<?php

namespace App\Controller;


use App\Entity\Manchete;
use App\Entity\TemaDaManchete;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Vich\UploaderBundle\Templating\Helper\UploaderHelper as Helper;
use Vich\UploaderBundle\Templating\Helper\UploaderHelper;

class GepesControl extends AbstractController {

    /**
     * @Route("/gepes")
     */
    public function homepage(EntityManagerInterface $em){
//        return new Response('first try');

        $repository = $em->getRepository(Manchete::class);
        $manchetes = $repository->findAll();


//        $path = null;
//        $helper = new UploaderHelper($repository);
//        foreach ($manchetes as $manchete) {

//            $path = $helper->asset($manchete, 'imagem');

//        }


        $repository = $em->getRepository(TemaDaManchete::class);
        $temas = $repository->findAll();





        dump($manchetes, $this);

//        $file = $manchetes->arquivoDaImagem()->getDocFile();

//        dump($manchetes);

        return $this->render('gepes.html.twig',
            ['manchetes' => $manchetes]);
    }
}