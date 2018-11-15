<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181115023254 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE tema_da_manchete (id INT AUTO_INCREMENT NOT NULL, tema VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE temas (id INT AUTO_INCREMENT NOT NULL, tema VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE manchete ADD tema_manchete_id INT DEFAULT NULL, ADD tema_da_manchete1123 VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE manchete ADD CONSTRAINT FK_2964B1E72692FE1F FOREIGN KEY (tema_manchete_id) REFERENCES tema_da_manchete (id)');
        $this->addSql('CREATE INDEX IDX_2964B1E72692FE1F ON manchete (tema_manchete_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE manchete DROP FOREIGN KEY FK_2964B1E72692FE1F');
        $this->addSql('DROP TABLE tema_da_manchete');
        $this->addSql('DROP TABLE temas');
        $this->addSql('DROP INDEX IDX_2964B1E72692FE1F ON manchete');
        $this->addSql('ALTER TABLE manchete DROP tema_manchete_id, DROP tema_da_manchete1123');
    }
}
