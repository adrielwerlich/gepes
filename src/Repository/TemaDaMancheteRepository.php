<?php

namespace App\Repository;

use App\Entity\TemaDaManchete;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TemaDaManchete|null find($id, $lockMode = null, $lockVersion = null)
 * @method TemaDaManchete|null findOneBy(array $criteria, array $orderBy = null)
 * @method TemaDaManchete[]    findAll()
 * @method TemaDaManchete[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TemaDaMancheteRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TemaDaManchete::class);
    }

    // /**
    //  * @return TemaDaManchete[] Returns an array of TemaDaManchete objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TemaDaManchete
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
