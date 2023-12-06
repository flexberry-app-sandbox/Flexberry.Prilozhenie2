package Prilozhenie_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СправУчен
 */
@Entity(name = "IISPrilozhenie_2СправУчен")
@Table(schema = "public", name = "СправУчен")
public class SpravUchen {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИОУченика")
    private String фиоученика;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpravKlas")
    @Convert("SpravKlas")
    @Column(name = "СправКлас", length = 16, unique = true, nullable = false)
    private UUID _spravklasid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpravKlas", insertable = false, updatable = false)
    private SpravKlas spravklas;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpravRod")
    @Convert("SpravRod")
    @Column(name = "СправРод", length = 16, unique = true, nullable = false)
    private UUID _spravrodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpravRod", insertable = false, updatable = false)
    private SpravRod spravrod;


    public SpravUchen() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИОУченика() {
      return фиоученика;
    }

    public void setФИОУченика(String фиоученика) {
      this.фиоученика = фиоученика;
    }


}