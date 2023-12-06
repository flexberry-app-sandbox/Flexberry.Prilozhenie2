package Prilozhenie_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: КартДоступ
 */
@Entity(name = "IISPrilozhenie_2КартДоступ")
@Table(schema = "public", name = "КартДоступ")
public class KartDostup {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКарты")
    private Integer номеркарты;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpravUchen")
    @Convert("SpravUchen")
    @Column(name = "СправУчен", length = 16, unique = true, nullable = false)
    private UUID _spravuchenid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpravUchen", insertable = false, updatable = false)
    private SpravUchen spravuchen;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpravSotr")
    @Convert("SpravSotr")
    @Column(name = "СправСотр", length = 16, unique = true, nullable = false)
    private UUID _spravsotrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpravSotr", insertable = false, updatable = false)
    private SpravSotr spravsotr;


    public KartDostup() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерКарты() {
      return номеркарты;
    }

    public void setНомерКарты(Integer номеркарты) {
      this.номеркарты = номеркарты;
    }


}