<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MancheteRepository")
 * @Vich\Uploadable
 */
class Manchete
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $titulo;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $descricao;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $link;


    /**
     *
     * @Assert\Image()
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     */
    private $caminhoDaImagem;


    /**
     * @Vich\UploadableField(mapping="manchete_images", fileNameProperty="caminhoDaImagem")
     * @var File
     */
    private $arquivoDaImagem;



    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @var \DateTime
     */
    private $dataDaPostagem;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TemaDaManchete", inversedBy="manchete")
     */
    private $temaManchete;



    public function setArquivoDaImagem(File $image = null)
    {
        $this->arquivoDaImagem = $image;

        if ($image instanceof UploadedFile) {
            $this->setUpdatedAt(new \DateTime());
        }

        // VERY IMPORTANT:
        // It is required that at least one field changes if you are using Doctrine,
        // otherwise the event listeners won't be called and the file is lost
        if ($image) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->dataDaPostagem = new \DateTime('now');
        }
    }

    public function getArquivoDaImagem()
    {
        return $this->arquivoDaImagem;
    }

//#############################################


    public function getAbsolutePath()
    {
        return null === $this->path
            ? null
            : $this->getUploadRootDir().'/'.$this->path;
    }

    public function getWebPath()
    {
        return null === $this->path
            ? null
            : $this->getUploadDir().'/'.$this->path;
    }

    protected function getUploadRootDir()
    {
        // the absolute directory path where uploaded
        // documents should be saved
        return __DIR__.'/../../../../web/'.$this->getUploadDir();
    }

    protected function getUploadDir()
    {
        // get rid of the __DIR__ so it doesn't screw up
        // when displaying uploaded doc/image in the view.
        return 'uploads/images/manchetes';
    }



    /**
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     */
    public function preUpload()
    {
        if (null !== $this->getFile()) {
            // do whatever you want to generate a unique name
            $filename = sha1(uniqid(mt_rand(), true));
            $this->path = $filename.'.'.$this->getFile()->guessExtension();
        }
    }

    /**
     * @ORM\PostPersist()
     * @ORM\PostUpdate()
     */
    public function upload()
    {
        if (null === $this->getFile()) {
            return;
        }

        // if there is an error when moving the file, an exception will
        // be automatically thrown by move(). This will properly prevent
        // the entity from being persisted to the database on error
        $this->getFile()->move($this->getUploadRootDir(), $this->path);

        // check if we have an old image
        if (isset($this->temp)) {
            // delete the old image
            unlink($this->getUploadRootDir().'/'.$this->temp);
            // clear the temp image path
            $this->temp = null;
        }
        $this->file = null;
    }

    /**
     * @ORM\PostRemove()
     */
    public function removeUpload()
    {
        if ($file = $this->getAbsolutePath()) {
            unlink($file);
        }
    }



//###########################################


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitulo(): ?string
    {
        return $this->titulo;
    }

    public function setTitulo(?string $titulo): self
    {
        $this->titulo = $titulo;

        return $this;
    }

    public function getDescricao(): ?string
    {
        return $this->descricao;
    }

    public function setDescricao(?string $descricao): self
    {
        $this->descricao = $descricao;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(?string $link): self
    {
        $this->link = $link;

        return $this;
    }



    public function getCaminhoDaImagem(): ?string
    {
        return $this->caminhoDaImagem;
    }

    public function setCaminhoDaImagem(?string $caminhoDaImagem): self
    {
        $this->caminhoDaImagem = $caminhoDaImagem;

        return $this;
    }


    /**
     * @return \DateTime
     */
    public function getDataDaPostagem(): \DateTime
    {
        if (empty($this->getDataDaPostagem())) {
            $now = $this->getDatetimeNow();
            $this->setDataDaPostagem($now);
        }
        return $this->dataDaPostagem;
    }


    function getDatetimeNow() {
        $tz_object = new DateTimeZone('Brazil/East');
        //date_default_timezone_set('Brazil/East');

        $datetime = new DateTime();
        $datetime->setTimezone($tz_object);
        return $datetime->format('Y\-m\-d\ h:i:s');
    }

    /**
     * @param \DateTime $dataDaPostagem
     */
    public function setDataDaPostagem(\DateTime $dataDaPostagem): void
    {
        $this->dataDaPostagem = $dataDaPostagem;
    }


    public function getTemaManchete(): ?TemaDaManchete
    {
        return $this->temaManchete;
    }

    public function setTemaManchete(?TemaDaManchete $temaManchete): self
    {
        $this->temaManchete = $temaManchete;

        return $this;
    }

    public function __toString()
    {
        if (empty($this->getTitulo())) return 'manchete não cadastrada';

        return $this->getTitulo();
    }

}
