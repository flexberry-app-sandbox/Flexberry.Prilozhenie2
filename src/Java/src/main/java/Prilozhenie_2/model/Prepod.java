package Prilozhenie_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Препод
 */
@Entity(name = "IISPrilozhenie_2Препод")
@Table(schema = "public", name = "Препод")
public class Prepod {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИОПрепода")
    private String фиопрепода;

    @Column(name = "Должность")
    private String должность;


    public Prepod() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИОПрепода() {
      return фиопрепода;
    }

    public void setФИОПрепода(String фиопрепода) {
      this.фиопрепода = фиопрепода;
    }

    public String getДолжность() {
      return должность;
    }

    public void setДолжность(String должность) {
      this.должность = должность;
    }


}