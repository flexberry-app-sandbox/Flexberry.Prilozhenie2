package Prilozhenie_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СправСотр
 */
@Entity(name = "IISPrilozhenie_2СправСотр")
@Table(schema = "public", name = "СправСотр")
public class SpravSotr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИОСотр")
    private String фиосотр;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpravDol")
    @Convert("SpravDol")
    @Column(name = "СправДол", length = 16, unique = true, nullable = false)
    private UUID _spravdolid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpravDol", insertable = false, updatable = false)
    private SpravDol spravdol;


    public SpravSotr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИОСотр() {
      return фиосотр;
    }

    public void setФИОСотр(String фиосотр) {
      this.фиосотр = фиосотр;
    }


}