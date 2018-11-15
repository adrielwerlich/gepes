<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;


/**
 * @ORM\Entity(repositoryClass="App\Repository\TemaDaMancheteRepository")
 * @Vich\Uploadable
 */
class TemaDaManchete
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
    private $tema;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Manchete", mappedBy="temaManchete")
     */
    private $manchete;

    public function __construct()
    {
        $this->manchete = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTema(): ?string
    {
        return $this->tema;
    }

    public function setTema(?string $tema): self
    {
        $this->tema = $tema;

        return $this;
    }

    /**
     * @return Collection|Manchete[]
     */
    public function getManchete(): Collection
    {
        return $this->manchete;
    }

    public function addManchete(Manchete $manchete): self
    {
        if (!$this->manchete->contains($manchete)) {
            $this->manchete[] = $manchete;
            $manchete->setTemaManchete($this);
        }

        return $this;
    }

    public function removeManchete(Manchete $manchete): self
    {
        if ($this->manchete->contains($manchete)) {
            $this->manchete->removeElement($manchete);
            // set the owning side to null (unless already changed)
            if ($manchete->getTemaManchete() === $this) {
                $manchete->setTemaManchete(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        if (empty($this->getTema())) return 'tema não cadastrado';

        return $this->getTema();
    }
}
