﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Prilozhenie_2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Карт доступ.
    /// </summary>
    // *** Start programmer edit section *** (КартДоступ CustomAttributes)

    // *** End programmer edit section *** (КартДоступ CustomAttributes)
    [AutoAltered()]
    [Caption("Карты Доступа")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КартДоступE", new string[] {
            "НомерКарты as \'Номер карты\'",
            "СправУчен as \'Справ учен\'",
            "СправУчен.ФИОУченика as \'Ф и о ученика\'",
            "СправСотр as \'СправСотр\'",
            "СправСотр.ФИОСотр as \'Ф и о сотр\'"})]
    [MasterViewDefineAttribute("КартДоступE", "СправУчен", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИОУченика")]
    [MasterViewDefineAttribute("КартДоступE", "СправСотр", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИОСотр")]
    [View("КартДоступL", new string[] {
            "НомерКарты as \'Номер карты\'",
            "СправУчен.ФИОУченика as \'Ф и о ученика\'",
            "СправСотр.ФИОСотр as \'Ответственный\'"})]
    public class КартДоступ : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерКарты;
        
        private IIS.Prilozhenie_2.СправУчен fСправУчен;
        
        private IIS.Prilozhenie_2.СправСотр fСправСотр;
        
        // *** Start programmer edit section *** (КартДоступ CustomMembers)

        // *** End programmer edit section *** (КартДоступ CustomMembers)

        
        /// <summary>
        /// НомерКарты.
        /// </summary>
        // *** Start programmer edit section *** (КартДоступ.НомерКарты CustomAttributes)

        // *** End programmer edit section *** (КартДоступ.НомерКарты CustomAttributes)
        public virtual int НомерКарты
        {
            get
            {
                // *** Start programmer edit section *** (КартДоступ.НомерКарты Get start)

                // *** End programmer edit section *** (КартДоступ.НомерКарты Get start)
                int result = this.fНомерКарты;
                // *** Start programmer edit section *** (КартДоступ.НомерКарты Get end)

                // *** End programmer edit section *** (КартДоступ.НомерКарты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (КартДоступ.НомерКарты Set start)

                // *** End programmer edit section *** (КартДоступ.НомерКарты Set start)
                this.fНомерКарты = value;
                // *** Start programmer edit section *** (КартДоступ.НомерКарты Set end)

                // *** End programmer edit section *** (КартДоступ.НомерКарты Set end)
            }
        }
        
        /// <summary>
        /// Карт доступ.
        /// </summary>
        // *** Start programmer edit section *** (КартДоступ.СправСотр CustomAttributes)

        // *** End programmer edit section *** (КартДоступ.СправСотр CustomAttributes)
        [PropertyStorage(new string[] {
                "СправСотр"})]
        [NotNull()]
        public virtual IIS.Prilozhenie_2.СправСотр СправСотр
        {
            get
            {
                // *** Start programmer edit section *** (КартДоступ.СправСотр Get start)

                // *** End programmer edit section *** (КартДоступ.СправСотр Get start)
                IIS.Prilozhenie_2.СправСотр result = this.fСправСотр;
                // *** Start programmer edit section *** (КартДоступ.СправСотр Get end)

                // *** End programmer edit section *** (КартДоступ.СправСотр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (КартДоступ.СправСотр Set start)

                // *** End programmer edit section *** (КартДоступ.СправСотр Set start)
                this.fСправСотр = value;
                // *** Start programmer edit section *** (КартДоступ.СправСотр Set end)

                // *** End programmer edit section *** (КартДоступ.СправСотр Set end)
            }
        }
        
        /// <summary>
        /// Карт доступ.
        /// </summary>
        // *** Start programmer edit section *** (КартДоступ.СправУчен CustomAttributes)

        // *** End programmer edit section *** (КартДоступ.СправУчен CustomAttributes)
        [PropertyStorage(new string[] {
                "СправУчен"})]
        [NotNull()]
        public virtual IIS.Prilozhenie_2.СправУчен СправУчен
        {
            get
            {
                // *** Start programmer edit section *** (КартДоступ.СправУчен Get start)

                // *** End programmer edit section *** (КартДоступ.СправУчен Get start)
                IIS.Prilozhenie_2.СправУчен result = this.fСправУчен;
                // *** Start programmer edit section *** (КартДоступ.СправУчен Get end)

                // *** End programmer edit section *** (КартДоступ.СправУчен Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (КартДоступ.СправУчен Set start)

                // *** End programmer edit section *** (КартДоступ.СправУчен Set start)
                this.fСправУчен = value;
                // *** Start programmer edit section *** (КартДоступ.СправУчен Set end)

                // *** End programmer edit section *** (КартДоступ.СправУчен Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КартДоступE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КартДоступE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КартДоступE", typeof(IIS.Prilozhenie_2.КартДоступ));
                }
            }
            
            /// <summary>
            /// "КартДоступL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КартДоступL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КартДоступL", typeof(IIS.Prilozhenie_2.КартДоступ));
                }
            }
        }
    }
}
