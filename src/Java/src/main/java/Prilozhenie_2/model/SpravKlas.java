package Prilozhenie_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: СправКлас
 */
@Entity(name = "IISPrilozhenie_2СправКлас")
@Table(schema = "public", name = "СправКлас")
public class SpravKlas {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Классы")
    private String классы;


    public SpravKlas() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКлассы() {
      return классы;
    }

    public void setКлассы(String классы) {
      this.классы = классы;
    }


}